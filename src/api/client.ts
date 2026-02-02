import axios, { AxiosError } from 'axios';
import type { AxiosInstance } from 'axios';
import type {
  LoginResponse,
  RegisterResponse,
  User,
  LogoutResponse,
  PaginatedResponse,
  Payment,
  ApiError,
  SelfDeclaration,
  MemberType,
  PublicMember,
  ConveningCommitteeMember,
  AdvisoryBodyMember,
  HonorBoardEntry,
  BatchRepresentative,
  AboutListResponse,
  Download,
  Event,
  EventListResponse,
  EventDetailResponse,
} from '@/types/api';
import { endpoints } from './endpoints';

class ApiClient {
  private client: AxiosInstance;
  private baseURL: string;

  constructor(baseURL: string = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000') {
    this.baseURL = baseURL;
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    // Request interceptor to add auth token
    this.client.interceptors.request.use(
      (config) => {
        const token = this.getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError<ApiError>) => {
        // Handle 401 - Unauthorized (token expired/invalid)
        if (error.response?.status === 401) {
          this.clearToken();
          // Redirect to login will be handled by the app
          window.location.href = '/login';
        }

        // Transform error to a more usable format
        if (error.response) {
          const apiError: ApiError = {
            message:
              error.response.data?.message ||
              `HTTP error! status: ${error.response.status}`,
            errors: error.response.data?.errors,
          };
          return Promise.reject(apiError);
        }
        return Promise.reject({
          message: error.message || 'An error occurred',
        } as ApiError);
      }
    );
  }

  private getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  setToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  clearToken(): void {
    localStorage.removeItem('auth_token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Authentication methods
  async login(emailOrPhone: string, password: string): Promise<LoginResponse> {
    const response = await this.client.post<LoginResponse>(endpoints.login, {
      email_or_phone: emailOrPhone,
      password,
    });
    
    if (response.data.token) {
      this.setToken(response.data.token);
    }
    return response.data;
  }

  async register(data: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    primary_member_type?: string;
    secondary_member_type_id?: number;
  }): Promise<RegisterResponse> {
    const response = await this.client.post<RegisterResponse>(endpoints.register, data);
    
    if (response.data.token) {
      this.setToken(response.data.token);
    }
    return response.data;
  }

  async logout(): Promise<LogoutResponse> {
    const response = await this.client.post<LogoutResponse>(endpoints.logout);
    this.clearToken();
    return response.data;
  }

  async getCurrentUser(): Promise<User> {
    const response = await this.client.get<User>(endpoints.currentUser);
    return response.data;
  }

  async updateProfile(data: {
    name: string;
    email?: string | null;
    phone: string;
  }): Promise<User> {
    const response = await this.client.put<User>(endpoints.currentUser, data);
    return response.data;
  }

  async updateMemberProfile(data: {
    name_bangla?: string | null;
    father_name?: string | null;
    mother_name?: string | null;
    gender?: string | null;
    jsc_year?: number | null;
    ssc_year?: number | null;
    highest_educational_degree?: string | null;
    present_address?: string | null;
    permanent_address?: string | null;
    profession?: string | null;
    designation?: string | null;
    institute_name?: string | null;
    t_shirt_size?: string | null;
    blood_group?: string | null;
  }): Promise<User> {
    const response = await this.client.put<User>(
      endpoints.currentUserProfile,
      data
    );
    return response.data;
  }

  // Payment methods
  async getPayments(status?: PaymentStatus): Promise<PaginatedResponse<Payment>> {
    const params = status ? { status } : {};
    const response = await this.client.get<PaginatedResponse<Payment>>(
      endpoints.payments,
      { params }
    );
    return response.data;
  }

  async getPayment(id: number): Promise<{ data: Payment }> {
    const response = await this.client.get<{ data: Payment }>(
      endpoints.payment(id)
    );
    return response.data;
  }

  // Self Declaration methods
  async submitSelfDeclaration(data: {
    name: string;
    signature_file: File;
    secondary_member_type_id: number;
    date: string;
  }): Promise<{ data: SelfDeclaration }> {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('signature_file', data.signature_file);
    formData.append('secondary_member_type_id', data.secondary_member_type_id.toString());
    formData.append('date', data.date);

    const response = await this.client.post<{ data: SelfDeclaration }>(
      endpoints.selfDeclarations,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  }

  // Member Type methods
  async getMemberTypes(): Promise<{ data: MemberType[] }> {
    const response = await this.client.get<{ data: MemberType[] }>(
      endpoints.memberTypes
    );
    return response.data;
  }

  // About Us (public)
  async getConveningCommittee(): Promise<AboutListResponse<ConveningCommitteeMember>> {
    const response = await this.client.get<AboutListResponse<ConveningCommitteeMember>>(
      endpoints.conveningCommittee
    );
    return response.data;
  }

  async getAdvisoryBody(): Promise<AboutListResponse<AdvisoryBodyMember>> {
    const response = await this.client.get<AboutListResponse<AdvisoryBodyMember>>(
      endpoints.advisoryBody
    );
    return response.data;
  }

  async getHonorBoard(): Promise<AboutListResponse<HonorBoardEntry>> {
    const response = await this.client.get<AboutListResponse<HonorBoardEntry>>(
      endpoints.honorBoard
    );
    return response.data;
  }

  async getBatchRepresentatives(): Promise<AboutListResponse<BatchRepresentative>> {
    const response = await this.client.get<AboutListResponse<BatchRepresentative>>(
      endpoints.batchRepresentatives
    );
    return response.data;
  }

  /** Public downloads list (no auth required). */
  async getDownloads(): Promise<AboutListResponse<Download>> {
    const response = await this.client.get<AboutListResponse<Download>>(
      endpoints.downloads
    );
    return response.data;
  }

  /** Public events list (no auth required). */
  async getEvents(params?: {
    status?: 'open' | 'closed';
    upcoming?: boolean;
  }): Promise<EventListResponse> {
    const response = await this.client.get<EventListResponse>(
      endpoints.events,
      { params }
    );
    return response.data;
  }

  /** Public event detail (no auth required for open/closed). */
  async getEvent(id: number): Promise<EventDetailResponse> {
    const response = await this.client.get<EventDetailResponse>(
      endpoints.event(id)
    );
    return response.data;
  }

  /** Register current user for event (auth required, member only). */
  async registerForEvent(
    id: number,
    data?: { notes?: string | null; guest_count?: number }
  ): Promise<{ message: string }> {
    const response = await this.client.post<{ message: string }>(
      endpoints.eventRegister(id),
      data ?? {}
    );
    return response.data;
  }

  /** Unregister current user from event (auth required). */
  async unregisterFromEvent(id: number): Promise<void> {
    await this.client.delete(endpoints.eventUnregister(id));
  }

  /** Register guest for event (no auth). */
  async registerGuestForEvent(
    id: number,
    data: { name: string; phone: string; address: string; ssc_jsc?: string | null }
  ): Promise<{ message: string }> {
    const response = await this.client.post<{ message: string }>(
      endpoints.eventRegisterGuest(id),
      { name: data.name, phone: data.phone, address: data.address, ssc_jsc: data.ssc_jsc ?? null }
    );
    return response.data;
  }

  /** Public paginated member list (no auth required). */
  async getMembers(params?: {
    page?: number;
    per_page?: number;
    search?: string;
    primary_member_type?: string;
    has_secondary_type?: boolean;
    secondary_member_type_id?: number;
  }): Promise<PaginatedResponse<PublicMember>> {
    const response = await this.client.get<PaginatedResponse<PublicMember>>(
      endpoints.members,
      { params }
    );
    return response.data;
  }
}

export const apiClient = new ApiClient();

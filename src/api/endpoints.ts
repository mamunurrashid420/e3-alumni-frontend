// API Endpoint Constants

const API_BASE = '/api';

export const endpoints = {
  // Authentication
  login: `${API_BASE}/login`,
  logout: `${API_BASE}/logout`,
  register: `${API_BASE}/register`,
  currentUser: `${API_BASE}/user`,
  currentUserProfile: `${API_BASE}/user/profile`,

  // Payments
  payments: `${API_BASE}/payments`,
  payment: (id: number) => `${API_BASE}/payments/${id}`,

  // Self Declarations
  selfDeclarations: `${API_BASE}/self-declarations`,
  selfDeclaration: (id: number) => `${API_BASE}/self-declarations/${id}`,
  selfDeclarationApprove: (id: number) => `${API_BASE}/self-declarations/${id}/approve`,
  selfDeclarationReject: (id: number) => `${API_BASE}/self-declarations/${id}/reject`,

  // Member Types
  memberTypes: `${API_BASE}/member-types`,

  // About Us (public)
  members: `${API_BASE}/about/members`,
  conveningCommittee: `${API_BASE}/about/convening-committee`,
  advisoryBody: `${API_BASE}/about/advisory-body`,
  honorBoard: `${API_BASE}/about/honor-board`,
  batchRepresentatives: `${API_BASE}/about/batch-representatives`,
} as const;

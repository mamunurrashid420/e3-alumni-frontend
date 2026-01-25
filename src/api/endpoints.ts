// API Endpoint Constants

const API_BASE = '/api';

export const endpoints = {
  // Authentication
  login: `${API_BASE}/login`,
  logout: `${API_BASE}/logout`,
  register: `${API_BASE}/register`,
  currentUser: `${API_BASE}/user`,

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
} as const;

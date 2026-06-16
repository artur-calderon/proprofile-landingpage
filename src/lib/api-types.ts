export type PlanName = "Free" | "Pro" | "Premium";

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    plan: PlanName;
  };
}

export interface ApiError {
  error: {
    message: string;
    code: string;
  };
}

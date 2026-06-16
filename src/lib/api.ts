import type { ApiError, AuthResponse, RegisterRequest } from "./api-types";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "https://proprofile-backend.ddnsfree.com/api";

export class ApiRequestError extends Error {
  code: string;

  constructor(message: string, code: string) {
    super(message);
    this.code = code;
  }
}

async function request<T>(
  method: string,
  path: string,
  body?: unknown
): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (res.status === 204) return undefined as T;

  const data = await res.json();

  if (!res.ok) {
    const err = data as ApiError;
    throw new ApiRequestError(
      err.error?.message ?? "Erro na API",
      err.error?.code ?? "INTERNAL_ERROR"
    );
  }

  return data as T;
}

export function register(body: RegisterRequest) {
  return request<AuthResponse>("POST", "/auth/register", body);
}

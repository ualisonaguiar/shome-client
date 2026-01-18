import axios from "axios";
import AuthenticatorService from "./AuthenticatorService";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

api.interceptors.request.use((config) => {
  const token = AuthenticatorService.getToken();

  // Se a requisição tiver `requiresAuth = true`, adiciona token
  if (config.headers?.requiresAuth && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export function getRequiredAuth() {
  return {
    headers: {
      requiresAuth: true,
    },
  };
}

export default api;

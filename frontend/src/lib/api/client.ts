import axios from 'axios';

// Base URL comes from the environment so it can change per deployment.
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000',
});

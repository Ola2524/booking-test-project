import { mockServices } from '../mock-data';
import type { Service } from '../types';

// Mock-backed for now. Swap these bodies for `apiClient` calls once the backend exposes them.
export async function getServices(): Promise<Service[]> {
  return mockServices;
}

export async function getService(id: string): Promise<Service | undefined> {
  return mockServices.find((s) => s.id === id);
}

/**
 * Contact Service - API calls cho form liên hệ
 */

import apiClient from '@/lib/api-client';
import { ApiResponse } from '@/types/api';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

/**
 * Gửi form liên hệ
 */
export async function submitContactForm(data: ContactFormData): Promise<ApiResponse<null>> {
  return apiClient.post<ApiResponse<null>>('/api/contact', data);
}


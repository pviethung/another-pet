import type { ApiResponse } from '@/types/ApiResponseData';

export interface ApiResponseSuccess<T> extends ApiResponse {
  error: false;
  data: T;
}

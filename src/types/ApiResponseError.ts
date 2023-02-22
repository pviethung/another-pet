import type { ApiResponse } from "@/types/ApiResponseData";

export interface ApiResponseError extends ApiResponse {
    data: null,
    error: true,
    msg: string
}


import type { ApiResponseError } from '@/types/ApiResponseError';
import type { ApiResponseSuccess } from '@/types/ApiResponseSuccess';

const ENDPOINT_URL = 'http://localhost:3000/tags';
export interface Tag {
  title: string;
  color: string;
}
export class Tags {
  url = ENDPOINT_URL;
  constructor(url?: string) {
    if (url) this.url = url;
  }
  async getTags() {
    const res = await fetch(this.url);
    if (!res.ok) {
      const error: ApiResponseError = {
        data: null,
        error: true,
        msg: res.statusText,
      };
      throw error;
    }

    const tags = (await res.json());
    return {
      data: tags,
      error: false,
    } as ApiResponseSuccess<Tag[]>;
  }
}


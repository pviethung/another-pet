import type { ApiResponseError } from '@/types/ApiResponseError';
import type { ApiResponseSuccess } from '@/types/ApiResponseSuccess';

export interface Fact {
  id: string;
  content: string;
  src: string;
  tag: string;
}

const ENDPOINT_URL = 'http://localhost:3000/facts';

export class Facts {
  url = ENDPOINT_URL;
  constructor(url?: string) {
    if (url) this.url = url;
  }
  async getFacts() {
    const res = await fetch(this.url);
    if (!res.ok) {
      throw {
        data: null,
        error: true,
        msg: res.statusText,
      } as ApiResponseError;
    }

    const facts = await res.json();
    return {
      data: facts,
      error: false,
    } as ApiResponseSuccess<Fact[]>;
  }
}


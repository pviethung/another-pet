import { Tags } from '@/services';
import useSWRV from 'swrv';

export const useTags = (url?: string) => {
  const tagsApi = new Tags(url);
  return useSWRV(tagsApi.url, () => tagsApi.getTags(), {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });
};

import { Facts } from '@/services';
import useSWRV from 'swrv';

export const useFacts = () => {
  const factsApi = new Facts();
  return useSWRV(factsApi.url, () => factsApi.getFacts(), {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });
};

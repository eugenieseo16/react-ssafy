import { useEffect, useState } from 'react';

export function useFetchData<T>(endpoint: string): {
  isLoading: boolean;
  error: Error | null;
  data: T[] | null;
} {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(endpoint);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, error, data };
}

import { useEffect, useState } from 'react';

const defaultOptions = {
  method: 'GET',
};

export function useFetchData<T>(
  endpoint: string,
  options?: { method: 'GET' | 'POST' | 'PUT' | 'DELETE'; body?: null }
) {
  const config = { ...defaultOptions, ...options };
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(endpoint, {
          method: config.method,
          body: JSON.stringify(config.body),
        });
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

  return { isLoading, error, data, setData };
}

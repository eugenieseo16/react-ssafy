import { I_Book } from '@/components/Books/Book';
import { useFetchData } from '@/hooks';

export function useBooks() {
  const { isLoading, error, data: books } = useFetchData<I_Book>('/api/books');
  return { isLoading, error, books };
}

export function useBook() {
  return null;
}

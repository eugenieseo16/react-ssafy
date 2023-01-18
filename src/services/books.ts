import { I_Book } from '@/components/Books/Book';
import { useFetchData } from '@/hooks';

/* Query -------------------------------------------------------------------- */

export function useBooks() {
  const {
    isLoading,
    error,
    data: books,
    setData: updateBooks,
  } = useFetchData<I_Book[]>('/api/books');

  return { isLoading, error, books, updateBooks };
}

export function useBook(bookIsbn: string) {
  const {
    isLoading,
    error,
    data: book,
    setData: updateBook,
  } = useFetchData<I_Book>(`/api/book/${bookIsbn}`);

  return { isLoading, error, book, updateBook };
}

/* Mutation ----------------------------------------------------------------- */

export async function deleteBook(isbn: string) {
  return await fetch(`/api/book/${isbn}`, { method: 'DELETE' });
}

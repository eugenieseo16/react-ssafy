import { Book } from './Book';

import { useBooks } from '@/services/useBooks';

export function Books() {
  const { isLoading, error, books } = useBooks();

  if (isLoading) {
    return <div role="alert">도서 정보 로딩 중...</div>;
  }

  if (error) {
    return <div role="alert">{error.message}</div>;
  }

  return (
    <div className="my-5 p-5 border border-violet-500">
      <ul className="flex flex-col gap-3">
        {books && books.map((book) => <Book key={book.isbn} book={book} />)}
      </ul>
    </div>
  );
}

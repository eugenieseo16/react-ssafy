import { Book } from './Book';

import { useBooks, deleteBook } from '@/services/books';

export function Books() {
  const { isLoading, error, books, updateBooks } = useBooks();

  if (isLoading) {
    return <div role="alert">도서 정보 로딩 중...</div>;
  }

  if (error) {
    return <div role="alert">{error.message}</div>;
  }

  const handleDelete = async (isbn: string) => {
    const response = await deleteBook(isbn);
    if (response.ok) {
      updateBooks(books ? books.filter((book) => book.isbn !== isbn) : null);
    } else {
      throw { message: response.statusText };
    }
  };

  return (
    <div className="my-5 p-5">
      <ul className="flex flex-col gap-3">
        {books &&
          books.map((book) => (
            <Book key={book.isbn} book={book} onDelete={handleDelete} />
          ))}
      </ul>
    </div>
  );
}

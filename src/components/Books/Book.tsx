import { ListItem } from './Book.styled';

import { numberWithComma } from '@/utils';

export interface I_Book {
  isbn: string;
  title: string;
  price: number;
  author: string;
}

interface Props {
  book: I_Book;
  onDelete?: (isbn: string) => void;
}

export function Book({
  book: { isbn, title, price, author },
  onDelete,
}: Props): JSX.Element {
  return (
    <ListItem data-isbn={isbn}>
      <strong className="text-xl text-violet-600">{title}</strong>
      <em className="text-sm text-gray-800">{author}</em>
      <span className="text-violet-900 font-semibold">{`${numberWithComma(
        price
      )}원`}</span>
      <button
        className="border border-violet-200 text-violet-600"
        type="button"
        onClick={() => onDelete?.(isbn)}
      >
        삭제
      </button>
    </ListItem>
  );
}

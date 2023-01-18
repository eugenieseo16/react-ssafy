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
      <strong>{title}</strong>
      <em className="text-sm">{author}</em>
      <span>{`${numberWithComma(price)}원`}</span>
      <button
        className="border border-violet-200"
        type="button"
        onClick={() => onDelete?.(isbn)}
      >
        삭제
      </button>
    </ListItem>
  );
}

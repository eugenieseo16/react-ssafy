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
}

export function Book({
  book: { isbn, title, price, author },
}: Props): JSX.Element {
  return (
    <ListItem data-isbn={isbn}>
      <strong>{title}</strong>
      <em className="text-sm">{author}</em>
      <span>{`${numberWithComma(price)}원`}</span>
    </ListItem>
  );
}

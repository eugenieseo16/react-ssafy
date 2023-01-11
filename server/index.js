import express from 'express';

import { db } from './db.js';

const app = express();
const API = '/api/v1';
const PORT = 4000;

app.use(express.json());

app.get(`${API}/books`, (_req, res) => {
  res.status(200).send(db.books);
});

app.post(`${API}/books`, (req, res) => {
  const { isbn, title, author, price } = req.body;
  if (isbn && title && author && price) {
    const newBook = { isbn, title, author, price };
    db.books.push(newBook);
    res.status(200).send(newBook);
  } else {
    res.status(400).send({
      message: '도서 정보(isbn, title, author, price)는 모두 입력 필요',
    });
  }
});

app.put(`${API}/books/:bookId`, (req, res) => {
  const { bookId } = req.params;
  const index = db.books.findIndex((book) => book.id === bookId);
  if (index > -1) {
    db.books.map((book) => {
      if (book.id === bookId) {
        return { ...book, ...req.body };
      }
      return book;
    });
    res.status(200).send(db.books[index]);
  } else {
    res.status(404).send({
      message: '도서를 찾을 수 없습니다.',
    });
  }
});

app.delete(`${API}/books/:bookId`, (req, res) => {
  const { bookId } = req.params;
  const index = db.books.findIndex((book) => book.id === bookId);
  if (index > -1) {
    db.books = db.books.filter((book) => book.id !== bookId);
    res.status(200).send({ message: '도서 삭제에 성공했습니다. 😃' });
  } else {
    res.status(404).send({
      message: '도서를 찾을 수 없습니다.',
    });
  }
});

app.listen(PORT, () => `http://localhost:${PORT}`);

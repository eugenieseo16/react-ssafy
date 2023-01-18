// import cors from 'cors';
import express from 'express';

import * as db from './db.js';

const app = express();
const API = '/api/v1';
const PORT = 4001;
let { books } = db;

// app.use(cors());
app.use(express.json());

app.get(`${API}/books`, (_req, res) => {
  res.status(200).send(books);
});

app.get(`${API}/book/:bookIsbn`, (_req, res) => {
  res.status(200).send(books);
});

app.post(`${API}/books`, (req, res) => {
  const { isbn, title, author, price } = req.body;
  if (isbn && title && author && price) {
    const newBook = { isbn, title, author, price };
    books.push(newBook);
    res.status(200).send(newBook);
  } else {
    res.status(400).send({
      message: '도서 정보(isbn, title, author, price)는 모두 입력 필요',
    });
  }
});

app.put(`${API}/book/:bookIsbn`, (req, res) => {
  const { bookIsbn } = req.params;
  const index = books.findIndex((book) => book.isbn === bookIsbn);
  if (index > -1) {
    books = books.map((book) => {
      if (book.isbn === bookIsbn) {
        return { ...book, ...req.body };
      }
      return book;
    });
    res.status(200).send(books[index]);
  } else {
    res.status(404).send({
      message: '도서를 찾을 수 없습니다.',
    });
  }
});

app.delete(`${API}/book/:bookIsbn`, (req, res) => {
  const { bookIsbn } = req.params;
  const index = books.findIndex((book) => book.isbn === bookIsbn);
  if (index > -1) {
    books = books.filter((book) => book.isbn !== bookIsbn);
    res.status(200).send({ message: '도서 삭제에 성공했습니다. 😃' });
  } else {
    res.status(404).send({
      message: '도서를 찾을 수 없습니다.',
    });
  }
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`http://localhost:${PORT}/api/v1/books`));

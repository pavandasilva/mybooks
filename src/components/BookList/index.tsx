import React, { useContext } from 'react';

import BookCard from '../BookCard';
import { useBook } from '../../hooks/book';

import { Container } from './styles';

const BookList: React.FC = () => {
  const { data: books } = useBook();

  console.log(books);

  return (
    <Container>
      {books && books.map((book) => <BookCard data={book} />)}
    </Container>
  );
};

export default BookList;

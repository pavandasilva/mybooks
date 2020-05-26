import React from 'react';

import BookCard from '../BookCard';
import { useBook } from '../../hooks/book';

import { Container } from './styles';

const BookList: React.FC = () => {
  const { books } = useBook();

  return (
    <Container>
      {books && books.map((book) => <BookCard data={book} />)}
    </Container>
  );
};

export default BookList;

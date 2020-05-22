import React from 'react';

import BookCard from '../BookCard';
import { Container } from './styles';

const BookList: React.FC = () => {
  return (
    <Container>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </Container>
  );
};

export default BookList;

import React from 'react';
import { Container } from './styles';

import BookList from '../../components/BookList';

const General: React.FC = () => {
  return (
    <Container>
      <span>Lista de livros</span>
      <BookList />
    </Container>
  );
};

export default General;

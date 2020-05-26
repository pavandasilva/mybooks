import React from 'react';
import { Container } from './styles';

import BookList from '../../components/BookList';
import SubHeader from '../../components/SubHeader';

const General: React.FC = () => {
  return (
    <>
      <SubHeader />
      <Container>
        <span>Lista de livros</span>
        <BookList />
      </Container>
    </>
  );
};

export default General;

import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';

import AlertModal from '../AlertModal';
import BookForm from '../BookForm';
import { Container, BookActions, Search, BookRegister } from './styles';

const SubHeader: React.FC = () => {
  return (
    <Container>
      <BookActions>
        <BookRegister>
          <FaPlus />
          <span>CADASTRAR LIVRO</span>
        </BookRegister>
        <Search>
          <FaSearch />
          <input type="text" placeholder="Buscar por livros" />
        </Search>
      </BookActions>

      {/*  <AlertModal type="warning" body="Livro removido com sucesso." /> */}
      <BookForm />
    </Container>
  );
};

export default SubHeader;

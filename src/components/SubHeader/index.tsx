import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
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
    </Container>
  );
};

export default SubHeader;

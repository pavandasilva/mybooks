import React from 'react';
import { FaSearch, FaPlus, FaEdit } from 'react-icons/fa';
import { useBookForm } from '../../hooks/bookForm';
import { Container, BookActions, Search, BookRegister } from './styles';

interface SubHeaderProps {
  mode?: 'insert' | 'update';
}

const SubHeader: React.FC<SubHeaderProps> = ({ mode = 'insert' }) => {
  const { showBookForm } = useBookForm();

  return (
    <Container>
      <BookActions>
        <BookRegister onClick={showBookForm}>
          {mode === 'insert' ? <FaPlus /> : <FaEdit />}
          <span>{mode === 'insert' ? 'CADASTRAR LIVRO' : 'EDITAR LIVRO'}</span>
        </BookRegister>
        {mode === 'insert' && (
          <Search>
            <FaSearch />
            <input type="text" placeholder="Buscar por livros" />
          </Search>
        )}
      </BookActions>
    </Container>
  );
};

export default SubHeader;

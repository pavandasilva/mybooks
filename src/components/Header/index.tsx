/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// eslint-disable-next-line jsx-a11y/click-events-have-key-events
import React from 'react';

import { Container, Logo, Menu, User } from './styles';
import LogoImg from '../../assets/logo.png';

import { useBookCategory } from '../../hooks/bookCategory';
import { useBook } from '../../hooks/book';

const Header: React.FC = () => {
  const { categories } = useBookCategory();
  const { addFilterByCategoryId } = useBook();

  const handleCategoryClick = (id?: string) => {
    addFilterByCategoryId(id);
  };

  return (
    <Container>
      <Logo src={LogoImg} />

      <Menu>
        <li onClick={() => handleCategoryClick()}>Geral</li>

        {categories &&
          categories.map(({ id, name }) => (
            <li key={id} onClick={() => handleCategoryClick(id)}>
              {name}
            </li>
          ))}

        <li>Excluídos</li>
      </Menu>
      <User>
        <p>Olá,</p>
        <span>Rogério</span>
      </User>
    </Container>
  );
};

export default Header;

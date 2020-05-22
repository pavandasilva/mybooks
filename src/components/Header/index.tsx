import React from 'react';

import { Container, Logo, Menu, User } from './styles';
import LogoImg from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={LogoImg} />

      <Menu>
        <li>Geral</li>
        <li>Lendo</li>
        <li>Lidos</li>
        <li>Lista de desejos</li>
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

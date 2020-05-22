import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';
import SubHeader from './components/SubHeader';

import { Container } from './styles/Container';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Header />
      <Container>
        <SubHeader />
        <Routes />
      </Container>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;

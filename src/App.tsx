import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import AppProvider from './hooks';
import { Container } from './styles/styles';

const App: React.FC = () => (
  <>
    <AppProvider>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes />
        </Container>
      </BrowserRouter>
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;

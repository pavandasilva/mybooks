import React from 'react';
import { AlertProvider } from './alert';
import { BookFormProvider } from './bookForm';
import { BookProvider } from './book';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AlertProvider>
      <BookProvider>
        <BookFormProvider>{children}</BookFormProvider>
      </BookProvider>
    </AlertProvider>
  );
};

export default AppProvider;

import React from 'react';
import { AlertProvider } from './alert';
import { BookFormProvider } from './bookForm';
import { BookProvider } from './book';
import { BookCategoryProvider } from './bookCategory';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AlertProvider>
      <BookCategoryProvider>
        <BookProvider>
          <BookFormProvider>{children}</BookFormProvider>
        </BookProvider>
      </BookCategoryProvider>
    </AlertProvider>
  );
};

export default AppProvider;

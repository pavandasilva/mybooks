import React, { createContext, useCallback, useContext, useState } from 'react';
import BookForm from '../components/BookForm';

interface BookFormContext {
  isVisible: boolean;
  showBookForm(): void;
  hideBookForm(): void;
}

const BookFormContext = createContext<BookFormContext>({} as BookFormContext);

export const BookFormProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showBookForm = useCallback(() => {
    setIsVisible(true);
  }, []);
  const hideBookForm = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <BookFormContext.Provider value={{ isVisible, showBookForm, hideBookForm }}>
      {children}
      {isVisible && <BookForm />}
    </BookFormContext.Provider>
  );
};

export function useBookForm(): BookFormContext {
  const context = useContext(BookFormContext);

  if (!context) {
    throw new Error('useBookForm must be used within a BookFormProvider');
  }

  return context;
}

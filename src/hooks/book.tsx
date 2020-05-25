import React, { createContext, useCallback, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface BookState {
  id: string;
  title: string;
  author: string;
  description: string;
  cover?: string;
  categoryId?: string;
  createdAt: string;
  updatedAt: string;
}

interface BookInsert {
  title: string;
  author: string;
  description: string;
  cover?: string;
  categoryId?: string;
}

interface BookContextState {
  data: BookState[];
  insert(data: BookInsert): void;
  delete(): void;
  update(): void;
}

const BookContext = createContext<BookContextState>({} as BookContextState);

export const BookProvider: React.FC = ({ children }) => {
  const [books, setBooks] = useState<BookState[]>(() => {
    const storagedBooks = localStorage.getItem('@MyBooks:books');

    if (storagedBooks) {
      return JSON.parse(storagedBooks);
    }

    return [] as BookState[];
  });

  const insert = useCallback(
    (data: BookInsert) => {
      const id = uuidv4();
      const now = new Date().toString();
      const createdAt = now;
      const updatedAt = now;

      const newBook: BookState = {
        ...data,
        id,
        createdAt,
        updatedAt,
      };

      const newBooksState = [...books, newBook];

      localStorage.setItem('@MyBooks:books', JSON.stringify(newBooksState));
      setBooks(newBooksState);
    },
    [books],
  );

  const update = useCallback(() => {
    console.log('book update');
  }, []);

  const del = useCallback(() => {
    console.log('book delete');
  }, []);

  return (
    <BookContext.Provider value={{ data: books, insert, update, delete: del }}>
      {children}
    </BookContext.Provider>
  );
};

export function useBook(): BookContextState {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error('useBook must be used within a BookProvider');
  }

  return context;
}

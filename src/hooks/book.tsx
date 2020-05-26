import React, { createContext, useCallback, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ListBooks from '../services/listBooks';

interface BookState {
  id: string;
  title: string;
  author: string;
  description: string;
  cover?: string;
  categoryId?: string;
  categoryName?: string;
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
  books: BookState[];
  insert(data: BookInsert): void;
  delete(): void;
  update(): void;
  addFilterByCategoryId(id?: string): void;
}

const BookContext = createContext<BookContextState>({} as BookContextState);

export const BookProvider: React.FC = ({ children }) => {
  const [books, setBooks] = useState<BookState[]>(() => {
    const listBooks = ListBooks({});

    return listBooks;
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

  const addFilterByCategoryId = useCallback((categoryId) => {
    const listBooksByCategoryId = ListBooks({ categoryId });

    setBooks(listBooksByCategoryId || []);
  }, []);

  const update = useCallback(() => {
    console.log('book update');
  }, []);

  const del = useCallback(() => {
    console.log('book delete');
  }, []);

  return (
    <BookContext.Provider
      value={{ books, insert, update, delete: del, addFilterByCategoryId }}
    >
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

import React, { createContext, useState, useContext } from 'react';

import ListBookCategories from '../services/listBooksCategories';

interface CategoryState {
  id: string;
  name: string;
}

interface CategoryContext {
  categories: CategoryState[];
}

const CategoryContext = createContext<CategoryContext>({} as CategoryContext);

export const BookCategoryProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<CategoryState[]>(() => {
    const listBooksCategories = ListBookCategories();
    return listBooksCategories;
  });

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export function useBookCategory(): CategoryContext {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error('useBookForm must be used within a BookFormProvider');
  }

  return context;
}

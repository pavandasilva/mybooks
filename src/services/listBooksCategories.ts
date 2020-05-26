import { v4 as uuidv4 } from 'uuid';

interface Category {
  id: string;
  name: string;
}

function listBooksCategories(id?: string): Category[] {
  const storagedCategories = localStorage.getItem('@MyBooks:booksCategories');

  let categories: Category[];

  if (storagedCategories) {
    categories = JSON.parse(storagedCategories);
  } else {
    categories = [
      {
        id: uuidv4(),
        name: 'read',
      },
      {
        id: uuidv4(),
        name: 'reading',
      },
      {
        id: uuidv4(),
        name: 'want_read',
      },
    ];
  }

  localStorage.setItem('@MyBooks:booksCategories', JSON.stringify(categories));

  if (id) {
    const categoriesFiltered = categories.filter(
      ({ id: categoryID }) => categoryID === id,
    );

    return categoriesFiltered;
  }

  return categories;
}

export default listBooksCategories;

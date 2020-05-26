/* eslint-disable array-callback-return */
import { groupBy } from 'lodash';
import ListBooksCategories from './listBooksCategories';

interface Book {
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

interface FilterListBooks {
  search?: string;
  categoryId?: string;
}

function listBooks({ search, categoryId }: FilterListBooks): Book[] {
  const storagedBooks = localStorage.getItem('@MyBooks:books');

  if (storagedBooks) {
    const books: Book[] = JSON.parse(storagedBooks);

    // get categories from localstorage
    const listBooksCategories = ListBooksCategories();

    // group categories by id
    const listBooksCategoriesGroupedById = groupBy(listBooksCategories, 'id');

    if (books) {
      const booksWithCategory = books.map((book) => {
        if (book.categoryId) {
          const bookWithCategory: Book = {
            ...book,
            categoryName:
              listBooksCategoriesGroupedById[book.categoryId][0].name,
          };

          return bookWithCategory;
        }

        return book;
      });

      if (!search && !categoryId) {
        return booksWithCategory;
      }

      // apply filters
      const booksFiltered = booksWithCategory.filter(
        ({
          title,
          author,
          description,
          categoryName = '',
          categoryId: bookCategoryId,
        }) => {
          if (bookCategoryId !== categoryId) {
            return false;
          }
          if (search) {
            const bookFinded =
              title.includes(search) ||
              author.includes(search) ||
              description.includes(search) ||
              categoryName.includes(search);

            return bookFinded;
          }
          return true;
        },
      );

      return booksFiltered;
    }
  }

  return [] as Book[];
}

export default listBooks;

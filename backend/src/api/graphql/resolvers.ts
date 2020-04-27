import { getBooks } from '@models/books';

export const resolvers = {
  Query: {
    books: () => {
      return getBooks();
    },
  },
};

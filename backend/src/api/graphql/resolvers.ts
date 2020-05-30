import { getAuthors } from '@models/authors';
import { getBooks } from '@models/books';

export const resolvers = {
  Query: {
    books: (_parent, _args, _context, _info) => {
      return getBooks();
    },
    authors: (_parent, _args, _context, _info) => {
      return getAuthors();
    },
  },
};

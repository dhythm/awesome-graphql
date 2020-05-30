import { getAuthors } from '@models/authors';
import { getBooks } from '@models/books';
import { getNumber } from '@models/numbers';

export const resolvers = {
  Query: {
    books: (_parent, _args, _context, _info) => {
      return getBooks();
    },
    authors: (_parent, _args, _context, _info) => {
      return getAuthors();
    },
    number: (_parent, _args, _context, _info) => {
      return getNumber();
    },
  },
};

import { getAuthors } from '@models/authors';
import { getBooks } from '@models/books';
import { getNumber, getNumbers } from '@models/numbers';

export const resolvers = {
  Query: {
    books: (_parent, _args, _context, _info) => {
      return getBooks();
    },
    authors: (_parent, _args, _context, _info) => {
      return getAuthors();
    },
    numbers: (_parent, _args, _context, _info) => {
      return getNumbers();
    },
    number: (_parent, { input }, _context, _info) => {
      return getNumber(input);
    },
  },
};

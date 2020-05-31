import { getAuthors } from '@models/authors';
import { getBooks } from '@models/books';
import { commentsList } from '@models/comments';
import { getNumber, getNumbers } from '@models/numbers';

export const resolvers = {
  Query: {
    getBooks: (_parent, _args, _context, _info) => {
      return getBooks();
    },
    getAuthors: (_parent, _args, _context, _info) => {
      return getAuthors();
    },
    getNumbers: (_parent, _args, _context, _info) => {
      return getNumbers();
    },
    getNumber: (_parent, { input }, _context, _info) => {
      return getNumber(input);
    },
    getComment: (_parent, { input }, _context, _info) => {
      return commentsList.find((p) => p.title === input.title);
    },
  },
};

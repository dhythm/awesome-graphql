import { getAuthors } from '@models/authors';
import { getBooks } from '@models/books';
import { commentsList } from '@models/comments';
import { getNumber, getNumbers } from '@models/numbers';

export const resolvers = {
  Query: {
    getBooks: (_parent, _args, _context, _info) => {
      const books = getBooks();
      console.log({ books });
      return books;
    },
    getAuthors: (_parent, _args, _context, _info) => {
      const authors = getAuthors();
      console.log({ authors });
      return authors;
    },
    getNumbers: (_parent, _args, _context, _info) => {
      const numbers = getNumbers();
      console.log({ numbers });
      return numbers;
    },
    getNumber: (_parent, { input }, _context, _info) => {
      const number = getNumber(input);
      console.log({ number });
      return number;
    },
    getComment: (_parent, { input }, _context, _info) => {
      const comment = commentsList.find((p) => p.title === input.title);
      console.log({ comment });
      return comment;
    },
  },
};

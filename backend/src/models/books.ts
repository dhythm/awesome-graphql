import { MockStorage } from '@storage/mock-storage';

export const getBooks = () => {
  // TODO: move this declaration to api and use DI
  const mockStorage = new MockStorage();
  const books = mockStorage.getBooks();
  const authors = mockStorage.getAuthors();

  return books.map((b) => ({
    title: b.title,
    author: authors.find((a) => a.id === b.authorId),
  }));
};

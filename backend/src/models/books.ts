import { MockStorage } from '@storage/mock-storage';

export const getBooks = () => {
  // TODO: move this declaration to api and use DI
  const mockStorage = new MockStorage();

  return mockStorage.getBooks();
};

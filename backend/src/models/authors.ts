import { MockStorage } from '@storage/mock-storage';

export const getAuthors = () => {
  // TODO: move this declaration to api and use DI
  const mockStorage = new MockStorage();

  return mockStorage.getAuthors();
};

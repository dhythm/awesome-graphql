export class MockStorage {
  constructor() {}

  getBooks(): any[] {
    return [
      {
        title: "Harry Potter and the Sorcerer's stone",
        author: 'J.K. Rowling',
      },
      {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
      },
    ];
  }
}

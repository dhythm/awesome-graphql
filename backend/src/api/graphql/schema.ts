import gql from 'graphql-tag';

export const Schema = gql`
  type Query {
    books: [Book]
    authors: [Author]
  }
  type Book {
    title: String
    author: Author
  }
  type Author {
    id: ID
    name: String
  }
`;

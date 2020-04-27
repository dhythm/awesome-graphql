import gql from 'graphql-tag';

export const Schema = gql`
  type Query {
    books: [Book]
  }
  type Book {
    title: String
    author: String
  }
`;

import gql from 'graphql-tag';

export const Schema = gql`
  type Query {
    books: [Book]
    authors: [Author]
    number(input: NumberInput!): Number
    numbers: [Number]
  }
  input NumberInput {
    id: ID
  }
  type Book {
    title: String
    author: Author
  }
  type Author {
    id: ID
    name: String
  }
  type Number {
    id: ID
    value: Float
  }
`;

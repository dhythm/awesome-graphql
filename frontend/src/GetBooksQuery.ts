import { DocumentNode } from 'apollo-link';
import gql from 'graphql-tag';

export const GetBooksQuery: DocumentNode = gql`
  query GetBooks {
    getBooks {
      title
      author
    }
  }
`;

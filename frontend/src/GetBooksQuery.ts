import { DocumentNode } from 'apollo-link';
import gql from 'graphql-tag';

export const GetBooksQuery: DocumentNode = gql`
  query Books {
    books {
      title
      author
    }
  }
`;

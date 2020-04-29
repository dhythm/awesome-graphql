import { DocumentNode, gql } from 'apollo-boost';

export const GetBooksQuery: DocumentNode = gql`
  {
    books {
      title
      author
    }
  }
`;

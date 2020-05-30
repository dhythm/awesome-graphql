import { DocumentNode } from 'apollo-link';
import gql from 'graphql-tag';

export const GetNumberQuery: DocumentNode = gql`
  query Number {
    number {
      id
      value
    }
  }
`;

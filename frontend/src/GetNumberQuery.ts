import { DocumentNode } from 'apollo-link';
import gql from 'graphql-tag';

export const GetNumberQuery: DocumentNode = gql`
  query GetNumber($input: NumberInput!) {
    getNumber(input: $input) {
      id
      value
    }
  }
`;

export const GetNumbersQuery: DocumentNode = gql`
  query GetNumbers {
    getNumbers {
      id
      value
    }
  }
`;

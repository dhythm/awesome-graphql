import { DocumentNode } from 'apollo-link';
import gql from 'graphql-tag';

export const GetNumberQuery: DocumentNode = gql`
  query Number($input: NumberInput!) {
    number(input: $input) {
      id
      value
    }
  }
`;

export const GetNumbersQuery: DocumentNode = gql`
  query Numbers {
    numbers {
      id
      value
    }
  }
`;

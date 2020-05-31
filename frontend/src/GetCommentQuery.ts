import { DocumentNode } from 'apollo-link';
import gql from 'graphql-tag';

export const GetCommentQuery: DocumentNode = gql`
  query GetComment($input: CommentInput!) {
    getComment(input: $input) {
      id
      comment
    }
  }
`;

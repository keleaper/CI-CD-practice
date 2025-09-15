// Create Schema + Resolvers

import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// type mutation {}
// type subscription {}

export const resolvers = {
    Query: {
        hello: () => "Hello, testing out CI/CD!",
    },
};
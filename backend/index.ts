import { resolvers } from '@api/graphql/resolvers';
import { Schema } from '@api/graphql/schema';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers,
});

// Initialize the app
const app: express.Express = express();

app.use(cors({ origin: ['http://localhost', 'http://localhost:3000'] }));

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(4000, () => {
  console.log('Go to http://localhost:4000/graphiql to run queries!');
});

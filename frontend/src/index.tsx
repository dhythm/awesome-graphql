import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: 'http://localhost:4000/graphql',
      credentials: 'same-origin',
    }),
  ]),
  cache: new InMemoryCache(),
});

// const apolloPersistor = new CachePersistor({
//   debug: true,
//   cache: inMemoryCache,
//   storage: AsyncStorage as PersistentStorage<
//     PersistedData<NormalizedCacheObject>
//   >,
//   trigger: 'background',
// });

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

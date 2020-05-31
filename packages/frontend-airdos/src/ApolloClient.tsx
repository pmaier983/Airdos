/* eslint-disable no-console */
import _ from 'lodash'
import React from 'react'

import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  headers: {
    token: localStorage.getItem('Session'),
  },
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: ApolloLink.from([
    onError((...errorArgs) => {
      const { graphQLErrors, networkError } = _.get(errorArgs, '0')
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ))
      }
      if (networkError) {
        console.log(`[Network error]: ${networkError}`)
      }
    }),
    httpLink,
  ]),
  cache,
})

export const ApolloWrapper: React.FC = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
)

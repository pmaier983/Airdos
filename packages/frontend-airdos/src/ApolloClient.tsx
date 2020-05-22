/* eslint-disable no-console */
import _ from 'lodash'
import React from 'react'

import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { InMemoryCache } from 'apollo-cache-inmemory'

const GITHUB_BASE_URL = 'http://localhost:4000/graphql'

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: localStorage.getItem('token'),
    secret: process.env.REACT_APP_REMEMBER_ME_SECRET,
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

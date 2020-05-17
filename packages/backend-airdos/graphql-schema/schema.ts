import { mockServer } from 'graphql-tools'
import gql from 'graphql-tag'

const typeDefs = gql`
  interface Node {
    id: ID!
  }

  type Query {
    message: String!
  }
`

const server = mockServer(typeDefs, {}, false)

server.query('{ __typename }', {})
  .then((response) => {
    console.log(response)
  })

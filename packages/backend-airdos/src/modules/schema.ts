import _ from 'lodash/fp'
import { gql } from 'apollo-server-express'

import { typeDefs as enumTds, resolvers as enumRzs } from './enums'
import { typeDefs as tds, resolvers as rzs } from './types'

const td = gql`
  interface Node {
    id: ID!
  }
  type Query {
    posts: [Post]
    user(username: String!): User
  }
`

const rz = {
  Node: {
    // eslint-disable-next-line no-underscore-dangle
    __resolveType() {
      return null
    },
  },
}

export const typeDefs = [...enumTds, ...tds, td]
export const resolvers = _.merge(enumRzs, rzs, rz)

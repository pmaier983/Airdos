import _ from 'lodash/fp'
import { gql } from 'apollo-server-express'

import { typeDefs as enumTds, resolvers as enumRzs } from './enums'
import { typeDefs as tds, resolvers as rzs } from './types'

import { passwords } from '../dud-data/passwords'

const td = gql`
  interface Node {
    id: ID!
  }
  type Query {
    posts: [Post]
    user(username: String!): User
    verifyUser(username: String!, password: String!): Boolean,
  }
`

const rz = {
  Query: {
    verifyUser: (parent, { username, password }) => {
      if (_.get(username, passwords) === password) {
        return true
      }
      return false
    },
  },
}

export const typeDefs = [...enumTds, ...tds, td]
export const resolvers = _.mergeAll(enumRzs, rzs, rz)

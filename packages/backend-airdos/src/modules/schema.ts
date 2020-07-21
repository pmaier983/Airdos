import _ from 'lodash/fp'
import { gql } from 'apollo-server-lambda'

import { typeDefs as enumTds, resolvers as enumRzs } from './enums'
import { typeDefs as tds, resolvers as rzs } from './types'

const td = gql`
  interface Node {
    id: ID!
  } 
  type ValueLabelNode {
    value: String
    label: String
  }
  type Query {
    posts: [Post]
    userByUsername(username: String!): User
    userByLogin(username: String!, password: String!): User
    userByToken(token: String!): User
    groupByName(name: String!): Group
    threadById(id: Int!): Thread
  }
`

const rz = {}

export const typeDefs = [...enumTds, ...tds, td]
// TODO how to get merge all to work here?
export const resolvers = _.merge(_.merge(enumRzs, rzs), rz)

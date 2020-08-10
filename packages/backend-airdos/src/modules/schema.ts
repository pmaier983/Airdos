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
    getUserByUsername(username: String!): User
    getUserByLogin(username: String!, password: String!): User
    getUserByToken(token: String!): User
    getGroupByName(name: String!): Group
    getPostById(id: String!): Post
  }
  type Mutation {
    test: String
  }
`

const rz = {
  Query: {
  },
  Mutation: {
  },
}

export const typeDefs = [...enumTds, ...tds, td]
export const resolvers = _.merge(_.merge(enumRzs, rzs), rz)

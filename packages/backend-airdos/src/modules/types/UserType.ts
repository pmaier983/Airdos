import { gql } from 'apollo-server-express'

import { users } from '../../dud-data'

export const typeDefs = gql`
  type User implements Node {
    id: ID!
    name: String
    firstName: String
    lastName: String
    username: String
    groups: [String]
    collegeName: String
    followers: [String]
    following: [String]
  }
`

export const resolvers = {
  Query: { user: (parent, { username }) => users[username] },
}

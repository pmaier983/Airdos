import { gql } from 'apollo-server-express'

export interface IUserType {
  id: string
  name: string
  firstName: string
  lastName: string
  username: string
  groups: [string]
  collegeName: string
  followers: [string]
  following: [string]
}

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
  Query: {
    user: (parent, { username }, context) => context.models.user.getByUsername(username),
  },
}

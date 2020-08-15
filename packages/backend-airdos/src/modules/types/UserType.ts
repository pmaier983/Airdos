import { gql } from 'apollo-server-lambda'

export type User = {
  id: string
  name: string
  firstName: string
  lastName: string
  username: string
  groups: { label: string; value: string }[]
  chosenGroups: { label: string; value: string }[]
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
    groups: [ValueLabelNode] 
    chosenGroups: [ValueLabelNode]
    collegeName: String
    followers: [String]
    following: [String]
  }
  input AddUserInput {
    firstName: String!
    lastName: String!
    username: String!
    password: String!
    collegeName: String
  }
`

export const resolvers = {
  Query: {
    getUserByUsername: (parent, props, context) => context.models.user.getByUsername(props),
    getUserByLogin: (parent, props, context) => context.models.user.verifyAndReturnUser(props),
    getUserByToken: (parent, props, context) => context.models.user.getByToken(props),
  },
  Mutation: {
    addUser: (parent, props, context) => context.models.user.addUser(props),
    updateToken: (parent, props, context) => context.models.user.updateToken(props),
  },
}

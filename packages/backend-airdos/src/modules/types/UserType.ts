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
`

export const resolvers = {
  Query: {
    userByUsername: (parent, props, context) => context.models.user.getByUsername(props),
    userByLogin: (parent, props, context) => context.models.user.verifyAndReturnUser(props),
    userByToken: (parent, props, context) => context.models.user.getByToken(props),
  },
}

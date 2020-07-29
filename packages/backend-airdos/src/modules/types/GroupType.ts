import { gql } from 'apollo-server-lambda'

import type { Post } from './PostType'

export type Group = {
  id: string
  name: string
  displayName: string
  posts: [Post]
  members: [string]
  admins: [string]
  private: boolean
}

export const typeDefs = gql`
  type Group implements Node {
    id: ID!
    name: String
    displayName: String
    posts: [Post]
    members: [String]
    admins: [String]
    private: Boolean
  }
`

export const resolvers = {
  Query: {
    groupByName: (parent, props, context) => context.models.group.getByName(props),
  },
}

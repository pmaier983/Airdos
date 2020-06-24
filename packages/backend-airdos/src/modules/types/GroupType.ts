import { gql } from 'apollo-server-lambda'

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
    groupByName: (parent, { name }, context) => context.models.group.getByName(name),
  },
}

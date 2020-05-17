import gql from 'graphql-tag'

export const typeDefs = gql`
  type User implements Node {
    id: ID!
    name: String!,
    # firstName: String!,
    # lastName: String!,
    # username: String!,
    # groups: [String!]!,
    # # TODO: make a enum list of College Names?
    # collegeName: String,
    # # TODO: Date (should Probably just be a string anyways)
    # dateCreated: String,
  }
`

export const resolvers = {
  User: {
    id: Math.random(),
    name: 'Hello World',
  },
}

import { gql } from 'apollo-server-lambda'

import { posts } from '../../dud-data'

export const typeDefs = gql`
  type Post implements Node {
    id: ID!
    location: String,
    title: String,
    postType: PostTypeEnum,
    text: String,
  }
`

export const resolvers = {
  Query: { posts: () => posts },
}

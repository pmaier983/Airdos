import { gql } from 'apollo-server-lambda'

import { posts } from '../../dud-data'

export type Post = {
  id: number
  childrenIds: number[]
  parentId: number
  group: { label: string; value: string }
  user: string
  text: string
  attachmentLink: string
  likes: number
  timeCreated: number
  replies?: Post[]
}

export const typeDefs = gql`
  type Post implements Node {
    id: ID!
    childrenIds: [ID]
    parentId: ID
    group: ValueLabelNode,
    user: String,
    text: String,
    attachmentLink: String,
    likes: Int,
    timeCreated: Int,
    replies: [Post],
  }
`

export const resolvers = {
  Query: {
    posts: () => posts,
    postById: (parent, props, context) => context.models.post.getPostById(props),
  },
}

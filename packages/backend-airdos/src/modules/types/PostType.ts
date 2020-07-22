import { gql } from 'apollo-server-lambda'

import { posts } from '../../dud-data'

export interface PostType {
  id: number
  group: {
    label: string
    value: string
  },
  user: string,
  title: string,
  text: string,
  replies: boolean,
  timeCreated: number,
  attachmentLink: string,
  likes: number,
}

export const typeDefs = gql`
  type Post implements Node {
    id: ID!
    group: ValueLabelNode,
    user: String,
    title: String,
    text: String,
    replies: Boolean,
    timeCreated: Int,
    attachmentLink: String,
    likes: Int,
  }
`

export const resolvers = {
  Query: {
    posts: () => posts,
  },
}

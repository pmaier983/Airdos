import { gql } from 'apollo-server-lambda'

export interface ThreadType {
  id: number
  group: {label: string, value: string}
  user: string
  text: string
  timeCreated: number
  replies: ThreadType[]
}

export const typeDefs = gql`
  type Thread implements Node {
    id: ID!
    group: ValueLabelNode,
    user: String,
    text: String,
    timeCreated: Int,
    replies: [Thread],
  }
`

export const resolvers = {
  Query: {
    threadById: (parent, { id }, context) => context.models.thread.getThreadById(id),
  },
}

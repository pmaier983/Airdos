import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

import { posts } from './dud-data'

// import { typeDefs, resolvers } from './modules/schema'

const typeDefs = gql`
  type Query {
    posts: [Post]
  }
  enum PostTypeEnum {
    PUBLICIZING_RESEARCH
    PRE_PEER_REVIEW
    DISCUSSION_TOPIC
    CONFERENCE_AWARENESS
    NONE
  }
  type Post {
    id: ID!
    location: String,
    title: String,
    postType: PostTypeEnum,
    text: String,
  }
`

const resolvers = {
  Query: { posts: () => posts },
}

const PORT = 4000

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: `http://localhost:${PORT}/graphql`,
  },
})

const app = express()

server.applyMiddleware({
  app,
})

// Start the server
app.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`)
  console.log(`http://localhost:${PORT}/graphql`)
})

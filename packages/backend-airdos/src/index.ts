import express from 'express'
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'

import { typeDefs, resolvers } from './modules/schema'

const PORT = 4000

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
})

const server = new ApolloServer({
  schema,
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

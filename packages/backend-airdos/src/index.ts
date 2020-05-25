import express from 'express'
import _ from 'lodash/fp'
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'

import { typeDefs, resolvers } from './modules/schema'
import { getUserModels } from './modules/types/models'
import { getUserFromToken } from './utils'

require('dotenv').config()

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
  context: ({ req }) => {
    const token = _.get('headers.token', req)
    const user = getUserFromToken(token)
    return {
      user,
      models: {
        user: getUserModels({ user }),
      },
    }
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

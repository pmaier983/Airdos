import { ApolloServer, makeExecutableSchema } from 'apollo-server-lambda'
import _ from 'lodash/fp'

import { resolvers, typeDefs } from './modules/schema'

import { getUserFromToken } from './utils'
import { getUserModels, getGroupModels, getPostModels } from './modules/types/models'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
})

const server = new ApolloServer({
  schema,
  playground: {
    endpoint: '/dev/graphql',
  },
  mocks: false,
  introspection: true,
  context: ({ event }) => {
    const token = _.get('headers.token', event)
    const user = getUserFromToken(token)
    return {
      user,
      secret: process.env.TEST,
      models: {
        user: getUserModels({ user }),
        group: getGroupModels({ user }),
        post: getPostModels({ user }),
      },
    }
  },
})

export { server }

import { ApolloServer, makeExecutableSchema } from 'apollo-server-lambda'
import _ from 'lodash/fp'
import AWS from 'aws-sdk'

import { resolvers, typeDefs } from './modules/schema'

import { getUserFromToken } from './utils'
import { getUserModels, getGroupModels, getPostModels } from './modules/types/models'

const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-2' })

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
      docClient,
      models: {
        user: getUserModels({ user }),
        group: getGroupModels({ user }),
        post: getPostModels({ user }),
      },
    }
  },
})

export { server }

import _ from 'lodash/fp'
import { gql, UserInputError, ApolloError } from 'apollo-server-lambda'

import { typeDefs as enumTds, resolvers as enumRzs } from './enums'
import { typeDefs as tds, resolvers as rzs } from './types'

const td = gql`
  interface Node {
    id: ID!
  } 
  type ValueLabelNode {
    value: String
    label: String
  }
  type Query {
    posts: [Post]
    userByUsername(username: String!): User
    userByLogin(username: String!, password: String!): User
    userByToken(token: String!): User
    groupByName(name: String!): Group
    postById(id: String!): Post
  }
  type Mutation {
    test: Name
  }
  type Name {
    value: String
    label: String
  }
`

const rz = {
  Query: {
  },
  Mutation: {
    // TODO: Make users table in dynamoDB
    test: (parent, props, context) => context.docClient.put({
      Item: {
        ID: 1,
        timeCreated: 1591609881,
        text: 'did it work?',
      },
      TableName: 'Test',
    }, (err) => {
      if (err) {
        console.error(err)
        return new ApolloError(err)
      }
      return {
        value: 'win',
        label: 'win',
      }
    }),
  },
}

export const typeDefs = [...enumTds, ...tds, td]
// TODO how to get merge all to work here?
export const resolvers = _.merge(_.merge(enumRzs, rzs), rz)

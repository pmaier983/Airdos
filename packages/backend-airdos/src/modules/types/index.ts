import _ from 'lodash/fp'
import * as PostType from './PostType'
import * as UserType from './UserType'

const types = [
  PostType,
  UserType,
]

export const typeDefs = _.map('typeDefs', types)
export const resolvers = _.flow(_.map('resolvers'), _.mergeAll)(types)

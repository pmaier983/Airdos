import _ from 'lodash/fp'
import * as PostType from './PostType'
import * as UserType from './UserType'
import * as GroupType from './GroupType'
import * as ThreadType from './ThreadType'

const types = [
  PostType,
  UserType,
  GroupType,
  ThreadType,
]

export const typeDefs = _.map('typeDefs', types)
export const resolvers = _.flow(_.map('resolvers'), _.mergeAll)(types)

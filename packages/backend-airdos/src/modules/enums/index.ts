import _ from 'lodash/fp'
import * as PostTypeEnum from './PostTypeEnum'

const types = [
  PostTypeEnum,
]

export const typeDefs = _.map('typeDefs', types)
export const resolvers = _.flow(_.map('resolvers'), _.mergeAll)(types)

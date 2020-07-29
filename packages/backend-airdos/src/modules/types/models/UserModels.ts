import { AuthenticationError } from 'apollo-server-lambda'
import _ from 'lodash/fp'

// eslint-disable-next-line no-unused-vars
import { User } from '../UserType'
import { users, passwords } from '../../../dud-data'
import { getUserFromToken } from '../../../utils'

const userPaths = ['id', 'name', 'firstName', 'lastName', 'username', 'groups', 'collegeName', 'followers', 'following', 'chosenGroups']

const publicPaths = ['id', 'name', 'firstName', 'lastName', 'username', 'collegeName']

export const getUserModels = ({ user }: {user: User | undefined}) => ({
  getByUsername: ({ username }: {username: string}) => {
    if (_.get('username', user) === username) {
      // TODO: have a list of public vs private paths
      return _.pick(userPaths, users[_.get('username', user)])
    }
    if (_.has(username, users)) {
      const foundUser = users[username]
      if (user) {
        return _.pick(userPaths, foundUser)
      }
      return _.pick(publicPaths, foundUser)
    }
    throw Error('No such User in directory')
  },
  getByToken: ({ token }: {token: string}) => {
    if (user) {
      return user
    }
    return getUserFromToken(token)
  },
  verifyAndReturnUser: ({ username, password }) => {
    if (_.get(username, passwords) === password) {
      return users[username]
    }
    throw new AuthenticationError('Wrong username or password')
  },
})

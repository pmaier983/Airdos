import { AuthenticationError } from 'apollo-server-lambda'
import _ from 'lodash/fp'

// eslint-disable-next-line no-unused-vars
import { users, passwords } from '../../../dud-data'
import { getUserFromToken } from '../../../utils'

export const getUserModels = ({ user, docClient }) => ({
  getByUsername: async ({ username }: {username: string}) => {
    try {
      const data = await docClient.get({
        TableName: 'airdos-users',
        Key: {
          username,
        },
      }).promise()
      return data.Item
    } catch (e) {
      return Error(e)
    }
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

import { getUserFromToken } from '../../../utils'

const userPaths = [
  'id',
  'name',
  'firstName',
  'lastName',
  'username',
  'groups',
  'collegeName',
  'followers',
  'following',
  'chosenGroups',
].join(', ')

const publicPaths = [
  'id',
  'name',
  'firstName',
  'lastName',
  'username',
  'collegeName',
].join(', ')

export const getUserModels = ({ user, docClient }) => ({
  getByUsername: async ({ username }: {username: string}) => {
    try {
      const data = await docClient.get({
        TableName: 'airdos-users',
        Key: {
          username,
        },
        ProjectionExpression: user ? userPaths : publicPaths,
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

  verifyAndReturnUser: async ({ username, password }) => {
    try {
      const data = await docClient.query({
        TableName: 'airdos-users',
        Key: {
          username,
        },
        ProjectionExpression: user ? userPaths : publicPaths,
      }).promise()
      // TODO: should not return password at all
      if (data.Item.password === password) {
        return data.Item
      }
      throw Error('Authentication Failed')
    } catch (e) {
      return Error(e)
    }
  },
})

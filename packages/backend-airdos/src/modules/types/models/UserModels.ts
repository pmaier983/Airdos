import _ from 'lodash/fp'

export const getUserModels = ({ docClient }) => ({
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

  getByToken: async ({ token }: {token: string}) => {
    try {
      const data = await docClient.query({
        TableName: 'airdos-users',
        IndexName: 'token-index',
        KeyConditionExpression: '#token = :token',
        ExpressionAttributeValues: {
          ':token': token,
        },
        ExpressionAttributeNames: {
          '#token': 'token',
        },
      }).promise()
      if (data.Items.length === 1) {
        return data.Items[0]
      }
      throw Error('Token Authentication Failed')
    } catch (e) {
      return Error(e)
    }
  },

  verifyAndReturnUser: async ({ username, password }) => {
    try {
      const data = await docClient.get({
        TableName: 'airdos-users',
        Key: {
          username,
        },
      }).promise()
      if (_.get('Item.password', data) === password) {
        return data.Item
      }
      throw Error('Authentication Failed')
    } catch (e) {
      return Error(e)
    }
  },

  addUser: async (userInfo) => {
    try {
      const data = await docClient.put({
        TableName: 'airdos-users',
        Key: userInfo,
      }).promise()
      return data.Item
    } catch (e) {
      return Error(e)
    }
  },
})

import { AuthenticationError } from 'apollo-server-lambda'
import _ from 'lodash/fp'

// eslint-disable-next-line no-unused-vars
import { IUserType } from '../UserType'
import { groups } from '../../../dud-data'

export const getGroupModels = ({ user }: {user: IUserType | undefined}) => ({
  getByName: (name: string) => {
    const possibleGroup = _.get(name, groups)
    if (possibleGroup) {
      const group = possibleGroup
      if (group.private && user) {
        if (group.members.includes(user.username)) {
          return group
        }
        throw new AuthenticationError('You do not have access to this group')
      }
      return group
    }
    throw new Error('No such Group in directory')
  },
})

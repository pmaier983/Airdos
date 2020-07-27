import { AuthenticationError } from 'apollo-server-lambda'
import _ from 'lodash/fp'

// eslint-disable-next-line no-unused-vars
import { User } from '../UserType'
import { groups } from '../../../dud-data'

export const getGroupModels = ({ user }: {user: User | undefined}) => ({
  getByName: ({ name }:{name: string}) => {
    const possibleGroup = _.get(name, groups)
    if (possibleGroup) {
      const group = possibleGroup
      if (group.private) {
        if (group.members.includes(_.get('username', user))) {
          return group
        }
        throw new AuthenticationError('You do not have access to this group')
      }
      return group
    }
    throw new Error('No such Group in directory')
  },
})

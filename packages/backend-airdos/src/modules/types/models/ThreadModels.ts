import _ from 'lodash/fp'

import { threads } from '../../../dud-data'
import type { IUserType } from '../UserType'
import type { ThreadType } from '../ThreadType'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getThreadModels = ({ user }: {user: IUserType | undefined}) => ({
  getThreadById: (id: number) => {
    const possibleThread = _.find((thread: ThreadType) => thread.id === id, threads)
    if (possibleThread) {
      return possibleThread
    }
    throw Error('No such Thread Exists')
  },
})

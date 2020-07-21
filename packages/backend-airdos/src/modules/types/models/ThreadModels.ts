import _ from 'lodash/fp'

import { threads } from '../../../dud-data'
import type { IUserType } from '../UserType'
import type { ThreadType } from '../ThreadType'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getThreadModels = ({ user }: {user: IUserType | undefined}) => ({
  getThreadById: (id: number) => {
    if (_.find((thread: ThreadType) => thread.id === id)) {
      return threads[id]
    }
    throw Error('No such Thread Exists')
  },
})

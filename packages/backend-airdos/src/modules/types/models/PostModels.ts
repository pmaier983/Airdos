import _ from 'lodash/fp'

import { posts } from '../../../dud-data'
import type { User } from '../UserType'
import type { Post } from '../PostType'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getPostModels = ({ user }: {user: User | undefined}) => ({
  getPostById: ({ id }) => {
    // eslint-disable-next-line eqeqeq
    const possiblePost = _.find((post: Post) => post.id == id, posts)
    if (possiblePost) {
      return possiblePost
    }
    throw Error('No such Post Exists')
  },
})

import _ from 'lodash/fp'

import { posts } from '../../../dud-data'
import type { Post } from '../PostType'

export const getPostModels = () => ({
  getPostById: ({ id }) => {
    // eslint-disable-next-line eqeqeq
    const possiblePost = _.find((post: Post) => post.id == id, posts)
    if (possiblePost) {
      return possiblePost
    }
    throw Error('No such Post Exists')
  },
})

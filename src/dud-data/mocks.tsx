import _ from 'lodash/fp'

import { GET_USERINFO } from '../pages/ProfilePage/ProfilePage.queries'
import { usersInfo } from './usersInfo'

const userInfoMocks = _.map((result) => ({
  request: {
    query: GET_USERINFO,
    variables: {
      username: result.username,
    },
  },
  result: { data: result },
}), usersInfo)

console.log(userInfoMocks)

export const mocks = userInfoMocks

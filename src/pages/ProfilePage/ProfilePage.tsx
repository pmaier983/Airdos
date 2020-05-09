import React from 'react'
import _ from 'lodash/fp'
import {
  useLocation,
} from 'react-router-dom'

import { ProfilePageUserInfo } from './ProfilePageUserInfo'
import { ProfilePageNotFound } from './ProfilePageNotFound'

import { usersInfo } from '../../dud-data/users'

// The username is the path after /profile
const getUrlUsername = (path: string) => {
  const splitPath = path.split('/')
  const profileIndex = _.findIndex((pathSegment) => pathSegment === 'profile', splitPath)
  return splitPath[profileIndex + 1]
}

const ProfilePage = () => {
  const location = useLocation()
  const usernameFromPath = getUrlUsername(location.pathname)

  // query database for user
  const user = _.find(({ username }) => username === usernameFromPath, usersInfo)

  if (!user) {
    return <ProfilePageNotFound />
  }

  return (
    <>
      <ProfilePageUserInfo {...user} />

    </>
  )
}

export { ProfilePage }

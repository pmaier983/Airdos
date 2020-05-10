import React from 'react'
import _ from 'lodash/fp'
import {
  useLocation, Redirect,
} from 'react-router-dom'
import styled from 'styled-components'

import { ProfilePageUserInfo } from './ProfilePageUserInfo'
import { ProfilePageNotFound } from './ProfilePageNotFound'
import { ProfilePageRelationshipSummaries } from './ProfilePageRelationshipSummaries'

import { usersInfo } from '../../dud-data/usersInfo'
import { followerRelationships } from '../../dud-data/followerRelationships'
import { groups } from '../../dud-data/groups'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const PaddingRelationshipsRow = styled.div`
  height: 10px;
  width: 100%;
`

// The username is the path after /profile
const getUrlUsername = (path: string) => {
  const splitPath = path.split('/')
  const profileIndex = _.findIndex((pathSegment) => pathSegment === 'profile', splitPath)
  return splitPath[profileIndex + 1]
}

const ProfilePage = () => {
  const location = useLocation()
  const usernameFromPath = getUrlUsername(location.pathname)

  if (usernameFromPath === 'undefined') {
    return <Redirect to="/login" />
  }

  // query database for user
  const userInfo = _.find(({ username }) => username === usernameFromPath, usersInfo)

  if (!userInfo) {
    return <ProfilePageNotFound />
  }

  // these should all be queries.
  const followerList = followerRelationships[userInfo.username]
  const groupList = userInfo.groups

  return (
    <Container>
      <ProfilePageUserInfo {...userInfo} />
      <PaddingRelationshipsRow />
      <ProfilePageRelationshipSummaries followerList={followerList} groupList={groupList} />
    </Container>
  )
}

export { ProfilePage }

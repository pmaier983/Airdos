import React from 'react'
import _ from 'lodash/fp'
import {
  useLocation, Redirect,
} from 'react-router-dom'
import { useLazyQuery } from '@apollo/react-hooks'
import styled from 'styled-components'

import { GET_USER_BY_USERNAME } from '../../queries'

import { ProfilePageUserInfo } from './ProfilePageUserInfo'
import { ProfilePageNotFound } from './ProfilePageNotFound'
import { ProfilePageRelationshipSummaries } from './ProfilePageRelationshipSummaries'
import { useUserContext } from '../../contexts/UserProvider'
import { FollowButton, MessageButton } from '../../components/buttons'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
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
  const [{ user: currentUser }] = useUserContext()
  const usernameFromPath = getUrlUsername(location.pathname)

  const [getUser, {
    called, data, loading, error,
  }] = useLazyQuery(GET_USER_BY_USERNAME, {
    variables: {
      username: usernameFromPath,
    },
  })

  // if the current user is viewing their profile page
  if (!usernameFromPath && currentUser) {
    return <Redirect to={`/profile/${currentUser?.username}`} />
  }

  // if you need to get the info of a user
  if (!currentUser && usernameFromPath && !called) {
    getUser()
  }

  if ((!currentUser && !usernameFromPath) || usernameFromPath === 'undefined') {
    return <Redirect to="/login" />
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  // if current user, show in url, if not show queried user.
  const user = usernameFromPath && (usernameFromPath !== currentUser?.username) ? _.get('userByUsername', data) : currentUser

  if (!user) {
    return <ProfilePageNotFound />
  }

  const followerList = user.followers
  const groupList = user.groups

  return (
    <Container>
      <ProfilePageUserInfo {...user} />
      <PaddingRelationshipsRow />
      <ProfilePageRelationshipSummaries followerList={followerList} groupList={groupList} />
      <PaddingRelationshipsRow />
      {user.username !== currentUser?.username
      && (
        <ButtonContainer>
          <FollowButton usernameToFollow={user.username} />
          <MessageButton usernameToMessage={user.username} />
        </ButtonContainer>
      )}

    </Container>
  )
}

export { ProfilePage }

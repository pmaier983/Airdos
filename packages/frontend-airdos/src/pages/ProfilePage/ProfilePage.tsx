import React from 'react'
import _ from 'lodash/fp'
import {
  useLocation, Redirect,
} from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'

import { GET_USER } from '../../queries'

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

  const {
    data, loading, error,
  } = useQuery(GET_USER, {
    variables: {
      username: usernameFromPath || currentUser?.username,
    },
  })

  // TODO: add loading and error screen
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  const { user } = data

  if ((!usernameFromPath && !user) || usernameFromPath === 'undefined') {
    return <Redirect to="/login" />
  }

  if (!usernameFromPath && user) {
    return <Redirect to={`/profile/${currentUser?.username}`} />
  }

  if (!user) {
    return <ProfilePageNotFound />
  }

  // these should all be queries.
  const followerList = user.followers
  const groupList = user.groups

  if (!followerList || !groupList) {
    return <div>Hello</div>
  }

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

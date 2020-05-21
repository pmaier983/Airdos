import React from 'react'
import _ from 'lodash/fp'
import {
  useLocation, Redirect,
} from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'

import { GET_USERINFO } from './ProfilePage.queries'

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
  const [{ userInfo: currentUserInfo }] = useUserContext()
  const usernameFromPath = getUrlUsername(location.pathname)

  const {
    data, loading, error,
  } = useQuery(GET_USERINFO, {
    variables: {
      username: usernameFromPath || currentUserInfo?.username,
    },
  })

  // TODO: add loading and error screen
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  const userInfo = data.user

  if ((!usernameFromPath && !userInfo) || usernameFromPath === 'undefined') {
    return <Redirect to="/login" />
  }

  if (!usernameFromPath && userInfo) {
    return <Redirect to={`/profile/${currentUserInfo?.username}`} />
  }

  if (!userInfo) {
    return <ProfilePageNotFound />
  }

  // these should all be queries.
  const followerList = userInfo.followers
  const groupList = userInfo.groups

  return (
    <Container>
      <ProfilePageUserInfo {...userInfo} />
      <PaddingRelationshipsRow />
      <ProfilePageRelationshipSummaries followerList={followerList} groupList={groupList} />
      <PaddingRelationshipsRow />
      {userInfo.username !== currentUserInfo?.username
      && (
        <ButtonContainer>
          <FollowButton usernameToFollow={userInfo.username} />
          <MessageButton usernameToMessage={userInfo.username} />
        </ButtonContainer>
      )}

    </Container>
  )
}

export { ProfilePage }

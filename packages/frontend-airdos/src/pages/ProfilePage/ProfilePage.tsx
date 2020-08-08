import React from "react"
import _ from "lodash/fp"
import { useLocation, Redirect } from "react-router-dom"
import { useLazyQuery } from "@apollo/react-hooks"
import styled from "styled-components"

import { GET_USER_BY_USERNAME } from "./ProfilePageQueries"

import { ProfilePageUserInfo } from "./ProfilePageUserInfo"
import { ProfilePageNotFound } from "./ProfilePageNotFound"
import { ProfilePageRelationshipSummaries } from "./ProfilePageRelationshipSummaries"
import { useCurrentUserContext } from "../../contexts/CurrentUserProvider"
import { FollowButton, MessageButton } from "../../components/buttons"

const StyledPaddingRowPageTop = styled.div`
  height: 20px;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`

const StyledPaddingRelationshipsRow = styled.div`
  height: 10px;
  width: 100%;
`

// The username is the path after /profile
const getUrlUsername = (path: string) => {
  const splitPath = path.split("/")
  const profileIndex = _.findIndex(
    (pathSegment) => pathSegment === "profile",
    splitPath
  )
  return splitPath[profileIndex + 1]
}

const ProfilePage: React.FC = () => {
  const location = useLocation()
  const [{ currentUser }] = useCurrentUserContext()
  const usernameFromPath = getUrlUsername(location.pathname)

  const [getUser, { called, data, loading, error }] = useLazyQuery(
    GET_USER_BY_USERNAME,
    {
      variables: {
        username: usernameFromPath,
      },
    }
  )

  // if the current user is viewing their profile page
  if (!usernameFromPath && currentUser) {
    return <Redirect to={`/profile/${currentUser?.username}`} />
  }

  // if you need to get the info of a user
  if (usernameFromPath && !called) {
    getUser()
  }

  if ((!currentUser && !usernameFromPath) || usernameFromPath === "undefined") {
    return <Redirect to="/login" />
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  // if current user, show in url, if not show queried user.
  const user =
    usernameFromPath && usernameFromPath !== currentUser?.username
      ? _.get("getUserByUsername", data)
      : currentUser

  if (!user) {
    return <ProfilePageNotFound />
  }

  const followerList = user.followers
  const groupList = user.groups

  return (
    <StyledContainer>
      <StyledPaddingRowPageTop />
      <ProfilePageUserInfo {...user} />
      <StyledPaddingRelationshipsRow />
      <ProfilePageRelationshipSummaries
        followerList={followerList}
        groupList={groupList}
      />
      <StyledPaddingRelationshipsRow />
      {user.username !== currentUser?.username && (
        <StyledButtonContainer>
          <FollowButton usernameToFollow={user.username} />
          <MessageButton usernameToMessage={user.username} />
        </StyledButtonContainer>
      )}
    </StyledContainer>
  )
}

export { ProfilePage }

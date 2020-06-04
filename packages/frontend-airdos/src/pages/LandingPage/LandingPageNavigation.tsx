import React from 'react'
import styled from 'styled-components'
import {
  Link,
} from 'react-router-dom'

import { StyledPaddingRowPage } from './landingPageStyles'
import { useCurrentUserContext } from '../../contexts/CurrentUserProvider'
import { ActiveStyleNavLink } from '../../components/ActiveStyleNavLink'
import { MaterialIcon } from '../../components/MaterialIcon'
import { LandingPageGroupNavigation } from './LandingPageGroupNavigation'

const StyledContainer = styled.div`
  display: flex;
  position: sticky;
  flex-direction: column;
  height: 100%;
  max-width: 250px;
  top: 0px;
`

const StyledRouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* text-align: right; */
`

const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledPaddingLinkColumn = styled.div`
  width: 10px;
  height: 100%;
`

const StyledPaddingLinksRow = styled.div`
  width: 100%;
  height: 5px;
`

const StyledLinkWrapper = styled(Link)`
  color: ${({ theme }) => theme.globalFontColor};
  text-decoration: none;
`

const StyledPaddingGroupRow = styled.div`
  height: 25px;
`

const LandingPageNavigation = () => {
  const [{ currentUser }, { clearUser }] = useCurrentUserContext()

  // TODO: fix cannot update component while another component renders bug
  const logoutUser = () => {
    clearUser()
  }

  return (
    <StyledContainer>
      <StyledPaddingRowPage />
      <StyledRouteContainer>
        <StyledLinkContainer>
          <MaterialIcon name="list" />
          <StyledPaddingLinkColumn />
          <ActiveStyleNavLink to="/feed">FEED</ActiveStyleNavLink>
        </StyledLinkContainer>
        <StyledPaddingLinksRow />
        <StyledLinkContainer>
          <MaterialIcon name="group" />
          <StyledPaddingLinkColumn />
          <ActiveStyleNavLink to="/groups">GROUPS</ActiveStyleNavLink>
        </StyledLinkContainer>
        <StyledPaddingLinksRow />
        <StyledLinkContainer>
          <MaterialIcon name="message" />
          <StyledPaddingLinkColumn />
          <ActiveStyleNavLink to="/messages">MESSAGES</ActiveStyleNavLink>
        </StyledLinkContainer>
        <StyledPaddingLinksRow />
        <StyledLinkContainer>
          <MaterialIcon name="library_books" />
          <StyledPaddingLinkColumn />
          <ActiveStyleNavLink to="/library">LIBRARY</ActiveStyleNavLink>
        </StyledLinkContainer>
        <StyledPaddingLinksRow />
        <StyledLinkContainer>
          <MaterialIcon name="person" />
          <StyledPaddingLinkColumn />
          <ActiveStyleNavLink to="/profile">PROFILE</ActiveStyleNavLink>
        </StyledLinkContainer>
      </StyledRouteContainer>
      {currentUser
        ? <StyledLinkWrapper to="/" onClick={logoutUser}>Logout</StyledLinkWrapper>
        :<StyledLinkWrapper to="/login">Login</StyledLinkWrapper> }
      <StyledPaddingGroupRow />
      <LandingPageGroupNavigation />

    </StyledContainer>
  )
}

export { LandingPageNavigation }

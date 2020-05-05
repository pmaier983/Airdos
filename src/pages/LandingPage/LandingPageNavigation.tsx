import React from 'react'
import styled from 'styled-components'

import { PaddingRowPage } from './landingPageStyles'
import { ActiveStyleNavLink } from '../../components/ActiveStyleNavLink'
import { MaterialIcon } from '../../components/MaterialIcon'


const Container = styled.div`
  display: flex;
  position: sticky;
  flex-direction: column;
  height: 100%;
  top: 0px;
`

const RouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* text-align: right; */
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const PaddingLinkColumn = styled.div`
  width: 10px;
  height: 100%;
`

const PaddingLinksRow = styled.div`
  width: 100%;
  height: 5px;
`

const LandingPageNavigation = () => (
  <Container>
    <PaddingRowPage />
    <RouteContainer>
      <LinkContainer>
        <MaterialIcon name="list" />
        <PaddingLinkColumn />
        <ActiveStyleNavLink to="/feed">FEED</ActiveStyleNavLink>
      </LinkContainer>
      <PaddingLinksRow />
      <LinkContainer>
        <MaterialIcon name="group" />
        <PaddingLinkColumn />
        <ActiveStyleNavLink to="/groups">GROUPS</ActiveStyleNavLink>
      </LinkContainer>
      <PaddingLinksRow />
      <LinkContainer>
        <MaterialIcon name="message" />
        <PaddingLinkColumn />
        <ActiveStyleNavLink to="/messages">MESSAGES</ActiveStyleNavLink>
      </LinkContainer>
      <PaddingLinksRow />
      <LinkContainer>
        <MaterialIcon name="library_books" />
        <PaddingLinkColumn />
        <ActiveStyleNavLink to="/library">LIBRARY</ActiveStyleNavLink>
      </LinkContainer>
      <PaddingLinksRow />
      <LinkContainer>
        <MaterialIcon name="person" />
        <PaddingLinkColumn />
        <ActiveStyleNavLink to="/profile">PROFILE</ActiveStyleNavLink>
      </LinkContainer>
    </RouteContainer>
  </Container>
)

export { LandingPageNavigation }

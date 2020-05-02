import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import styled from 'styled-components'

import { PaddingRowPage } from './landingPageStyles'
import { ActiveStyleNavLink } from '../../components/ActiveStyleNavLink'

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
  text-align: right;
`

const LandingPageNavigation = () => (
  <Container>
    <PaddingRowPage />
    <Router>
      <RouteContainer>
        <ActiveStyleNavLink to="/feed">FEED</ActiveStyleNavLink>
        <ActiveStyleNavLink to="/groups">GROUPS</ActiveStyleNavLink>
        <ActiveStyleNavLink to="/messages">MESSAGES</ActiveStyleNavLink>
        <ActiveStyleNavLink to="/library">LIBRARY</ActiveStyleNavLink>
        <ActiveStyleNavLink to="/profile">PROFILE</ActiveStyleNavLink>
        <Switch>
          <Route path="/feed" />
          <Route path="/groups" />
        </Switch>
      </RouteContainer>
    </Router>
  </Container>
)

export { LandingPageNavigation }

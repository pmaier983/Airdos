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
  flex-direction: column;
`

const RouteContainer = styled.div`
  display: flex;
  flex-direction: column;
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
          <Route path="/" />
          <Route path="/feed" />
          <Route path="/groups">
            <div>groups</div>
          </Route>
        </Switch>
      </RouteContainer>
    </Router>
  </Container>
)

export { LandingPageNavigation }

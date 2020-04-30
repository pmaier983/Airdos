import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // Redirect,
  // useHistory,
  // useLocation,
} from 'react-router-dom'
import styled from 'styled-components'

import { PaddingRowPage } from './landingPageStyles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const RouteContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const FormattedLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => (theme.globalFontColor)};
  font-size: ${({ theme }) => theme.largeFontSize};
`

const LandingPageNavigation = () => (
  <Container>
    <PaddingRowPage />
    <Router>
      <RouteContainer>
        <FormattedLink to="/feed">FEED</FormattedLink>
        <FormattedLink to="/groups">GROUPS</FormattedLink>
        <FormattedLink to="/messages">MESSAGES</FormattedLink>
        <FormattedLink to="/library">LIBRARY</FormattedLink>
        <FormattedLink to="/profile">PROFILE</FormattedLink>
        <Switch>
          <Route path="/public">
            {/* <PublicPage /> */}
          </Route>
          <Route path="/login">
            {/* <LoginPage /> */}
          </Route>
          {/* <PrivateRoute path="/protected">
          <ProtectedPage />
        </PrivateRoute> */}
        </Switch>
      </RouteContainer>
    </Router>
  </Container>
)

export { LandingPageNavigation }

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

const RouteContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const FormattedLink = styled(Link)`
  text-decoration: none;
  color: rgb(${({ theme }) => (theme.globalFontColor)});
  font-size: ${({ theme }) => theme.largeFontSize};
`

const LandingPageNavigation = () => (
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
)

export { LandingPageNavigation }

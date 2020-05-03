import React from 'react'
import styled from 'styled-components'
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { FeedStack } from '../../components/FeedStack'
import { PaddingRowPage } from './landingPageStyles'

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  min-height: 100%;
  box-shadow: 
    -${({ theme }) => theme.borderWidth} 0 0 0 ${({ theme }) => theme.borderColor}, 
     ${({ theme }) => theme.borderWidth} 0 0 0 ${({ theme }) => theme.borderColor};
`

const PaddingContainer = styled.div`
  display: flex;
  box-shadow: 
    -${({ theme }) => theme.borderWidth} 0 0 0 ${({ theme }) => theme.borderColor}, 
     ${({ theme }) => theme.borderWidth} 0 0 0 ${({ theme }) => theme.borderColor};
`

const PaddingColumnContent = styled.div`
  height: 100%;
  width: 15px;
`

const LandingPageContent = () => (
  <Container>
    <PaddingRowPage />
    <PaddingContainer>
      <PaddingColumnContent />
      <Switch>
        {/* TODO: Remove this Default Path */}
        <Route exact path="/">
          <Redirect to="/feed" />
        </Route>
        <Route path="/feed">
          <FeedStack />
        </Route>
        <Route path="/groups">
          <div>Groups is not yet built</div>
        </Route>
        <Route path="/profile">
          <div>Profile is not yet built</div>
        </Route>
        <Route path="/messages">
          <div>Messages is not yet built</div>
        </Route>
        <Route path="/library">
          <div>Library is not yet built</div>
        </Route>
        <Route path="/Profile">
          <div>Profile is not yet built</div>
        </Route>
      </Switch>
      <PaddingColumnContent />
    </PaddingContainer>
  </Container>
)

export { LandingPageContent }

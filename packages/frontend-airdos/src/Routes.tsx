import React from 'react'
import {
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom'

import { LoginPage } from './pages/LoginPage'
import { LandingPage } from './pages/LandingPage'
import { landingPageRoutes } from './pages/LandingPage/landingPageRoutes'

// TODO: find out the true type of these components
export interface IPageRoutes {
  path: string,
  Component: React.JSXElementConstructor<any>,
  Router: React.JSXElementConstructor<any>,
}

export const renderRoutes = (routes: IPageRoutes[]) => routes.map(({ path, Component, Router }) => (
  <Router key={path} path={path}>
    <Component />
  </Router>
))

const Routes = () => {
  const landingPageRoute = useRouteMatch(landingPageRoutes.map(({ path }) => path))

  return (
    <>
      {landingPageRoute && <LandingPage />}
      <Route exact path="/">
        <Redirect to="/feed" />
      </Route>
      <Route path="/login"><LoginPage /></Route>
    </>
  )
}
export { Routes }

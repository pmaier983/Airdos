import React from "react"
import { Route, Redirect, useRouteMatch } from "react-router-dom"

import { LoginPage } from "./pages/LoginPage"
import { LandingPage } from "./pages/LandingPage"
import { landingPageRoutes } from "./pages/LandingPage/landingPageRoutes"

const Routes = () => {
  const landingPageRoute = useRouteMatch(
    landingPageRoutes.map(({ path }) => path)
  )

  return (
    <>
      {landingPageRoute && <LandingPage />}
      <Route exact path="/">
        <Redirect to="/feed" />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </>
  )
}
export { Routes }

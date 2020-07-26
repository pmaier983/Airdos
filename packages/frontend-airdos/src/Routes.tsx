import React from "react"
import { Route, Redirect } from "react-router-dom"

import { LoginPage } from "./pages/LoginPage"
import { LandingPage } from "./pages/LandingPage"

const Routes = () => (
  <>
    <LandingPage />
    <Route exact path="/">
      <Redirect to="/feed" />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
  </>
)

export { Routes }

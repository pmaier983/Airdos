import React from "react"
import { Route, Redirect } from "react-router-dom"

import { LoginPage } from "./pages/LoginPage"
import { LandingPage } from "./pages/LandingPage"
import { CreateUserPage } from "./pages/CreateUserPage"

const Routes = () => (
  <>
    <LandingPage />
    <Route exact path="/">
      <Redirect to="/feed" />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route path="/createUser">
      <CreateUserPage />
    </Route>
  </>
)

export { Routes }

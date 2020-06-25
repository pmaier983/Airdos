import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useCurrentUserContext } from "../contexts/CurrentUserProvider"

// TODO: get this from react router v6
interface IPrivateRouteProps {
  path: string
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({ children, ...rest }) => {
  const [{ currentUser }] = useCurrentUserContext()
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export { PrivateRoute }

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUserContext } from '../contexts/UserProvider'

// TODO: get this from react router v6
interface IPrivateRouteProps {
  path: string
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({ children, ...rest }) => {
  const [{ userInfo }] = useUserContext()
  return (
    <Route
      {...rest}
      render={({ location }) => (userInfo ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ))}
    />
  )
}

export { PrivateRoute }

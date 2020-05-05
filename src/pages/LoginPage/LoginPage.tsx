import React from 'react'
import _ from 'lodash/fp'
import {
  useLocation,
} from 'react-router-dom'

const LoginPage = () => {
  const location = useLocation()

  const from = _.get('from.pathname', location.state || { from: { pathname: '/' } })
  console.log('from?', from)

  return (<div>{`You Must Be Logged in to view ${from}`}</div>)
}
export { LoginPage }

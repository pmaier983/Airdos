import React from 'react'
import _ from 'lodash/fp'
import { useLocation } from 'react-router-dom'

import { GroupPage } from './GroupPage'
import { GroupsPage } from './GroupsPage'

const getUrlGroupName = (path: string) => {
  const splitPath = path.split('/')
  const profileIndex = _.findIndex((pathSegment) => pathSegment === 'groups', splitPath)
  return splitPath[profileIndex + 1]
}

const RouteGroupPage: React.FC = () => {
  const location = useLocation()
  const pathGroupName = getUrlGroupName(location.pathname)

  if (pathGroupName) {
    return <GroupPage pathGroupName={pathGroupName} />
  }

  return (
    <GroupsPage />
  )
}

export { RouteGroupPage }

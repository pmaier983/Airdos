import React from 'react'
import {
  Route,
} from 'react-router-dom'

import { PrivateRoute } from '../../components/PrivateRoute'
import { IPageRoutes } from '../../Routes'
import { FeedStack } from '../../components/FeedStack'
import { ProfilePage } from '../ProfilePage'
import { RouteGroupPage } from '../GroupPage'

const DummyComponent = () => <div>This Route is not built yet</div>

const landingPageRoutes: IPageRoutes[] = [
  {
    path: '/feed',
    Component: FeedStack,
    Router: Route,
  },
  {
    path: '/groups',
    Component: RouteGroupPage,
    Router: Route,
  },
  {
    path: '/profile',
    Component: ProfilePage,
    Router: Route,
  },
  {
    path: '/messages',
    Component: DummyComponent,
    Router: PrivateRoute,

  },
  {
    path: '/library',
    Component: DummyComponent,
    Router: PrivateRoute,
  },
]

export { landingPageRoutes }

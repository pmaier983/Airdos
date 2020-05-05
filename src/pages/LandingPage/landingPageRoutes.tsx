import React from 'react'
import {
  Route,
} from 'react-router-dom'

import { PrivateRoute } from '../../components/PrivateRoute'
import { IPageRoutes } from '../../Routes'
import { FeedStack } from '../../components/FeedStack'

const DummyComponent = () => <div>This Route is not built yet</div>

const landingPageRoutes: IPageRoutes[] = [
  {
    path: '/feed',
    Component: FeedStack,
    Router: Route,
  },
  {
    path: '/groups',
    Component: DummyComponent,
    Router: Route,
  },
  {
    path: '/profile',
    Component: DummyComponent,
    Router: PrivateRoute,

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
  {
    path: '/profile',
    Component: DummyComponent,
    Router: PrivateRoute,
  },
]

export { landingPageRoutes }

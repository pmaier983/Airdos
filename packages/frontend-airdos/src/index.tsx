import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeWrapper } from './ThemeWrapper'
import { ApolloWrapper } from './ApolloClient'
import { CurrentUserProvider } from './contexts/CurrentUserProvider'
import { App } from './App'

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <ApolloWrapper>
    <ThemeWrapper>
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </ThemeWrapper>
  </ApolloWrapper>,
  document.getElementById('root'),
)

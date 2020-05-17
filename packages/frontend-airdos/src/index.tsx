import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeWrapper } from './ThemeWrapper'
import { UserProvider } from './contexts/UserProvider'
import { App } from './App'

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <ThemeWrapper>
    <UserProvider>
      <App />
    </UserProvider>
  </ThemeWrapper>,
  document.getElementById('root'),
)

import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { ThemeWrapper } from './ThemeWrapper'
import { App } from './App'

const SiteContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

ReactDOM.render(
  <SiteContainer>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </SiteContainer>,
  document.getElementById('root'),
)

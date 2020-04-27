import React from 'react'
import styled from 'styled-components'

import { FeedStack } from './components/FeedStack'

const FeedPageContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`

const FeedPage = () => (
  <FeedPageContainer>
    <FeedStack />
  </FeedPageContainer>
)

export { FeedPage }

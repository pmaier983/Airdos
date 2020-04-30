import React from 'react'
import styled from 'styled-components'

const FeedContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 
    -${({ theme }) => theme.borderWidth} 0 0 0 ${({ theme }) => theme.borderColor}, 
     ${({ theme }) => theme.borderWidth} 0 0 0 ${({ theme }) => theme.borderColor},
     0 -${({ theme }) => theme.borderWidth} 0 0 ${({ theme }) => theme.borderColor};
`

const FeedStack = () => (
  <FeedContainer>
    I am a feed
  </FeedContainer>
)

export { FeedStack }

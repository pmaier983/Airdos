import React from 'react'
import styled from 'styled-components'

const StyledGroupButton = styled.div`
  font-size: ${({ theme }) => theme.largeFontSize};
`

const LandingPageGroupNavigation = () => {
  console.log('hi')
  return (<StyledGroupButton>Group +</StyledGroupButton>)
}

export { LandingPageGroupNavigation }

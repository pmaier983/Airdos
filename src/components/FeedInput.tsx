import React from 'react'
import styled from 'styled-components'

const InputBox = styled.input`
  width: 100%;
  height: 100px;
  box-shadow: ${({ theme }) => theme.basicBoxShadow};
  border-radius: ${({ theme }) => theme.normalBorderRadius};
  border: none;
  padding: 0;
`

const FeedInput = () => <InputBox />

export { FeedInput }

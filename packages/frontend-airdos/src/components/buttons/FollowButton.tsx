import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { useUserContext } from '../../contexts/UserProvider'

const ButtonStyle = styled.button`
  border: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.normalBorderRadius};
  box-shadow: ${({ theme }) => theme.normalHighlightedBoxShadow};
  font-size: ${({ theme }) => theme.mediumLargeFontSize};
  font-family: ${({ theme }) => theme.normalFontFamily};
  background-color: ${({ theme }) => theme.lightFocusColor};
  :hover {
    background-color: ${({ theme }) => theme.focusColor};
    color: ${({ theme }) => theme.contrastFocusColor};
  }
`

interface IFollowButtonProps {
  usernameToFollow: string
}

// TODO: Possibly Consolidate Message and Follow Button
const FollowButton: React.FC<IFollowButtonProps> = ({ usernameToFollow }) => {
  const history = useHistory()
  const [{ user }] = useUserContext()

  if (!user) {
    return <ButtonStyle onClick={() => history.push('/login')}>LOGIN TO FOLLOW</ButtonStyle>
  }

  return (
    <ButtonStyle onClick={() => console.log(usernameToFollow)}>FOLLOW</ButtonStyle>
  )
}

export { FollowButton }

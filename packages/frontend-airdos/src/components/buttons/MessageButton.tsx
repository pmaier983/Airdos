import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { useCurrentUserContext } from '../../contexts/CurrentUserProvider'

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

interface IMessageButtonProps {
  usernameToMessage: string
}

// TODO: Possibly Consolidate Message and Follow Button
const MessageButton: React.FC<IMessageButtonProps> = ({ usernameToMessage }) => {
  const history = useHistory()
  const [{ currentUser }] = useCurrentUserContext()

  if (!currentUser) {
    return <ButtonStyle onClick={() => history.push('/login')}>LOGIN TO MESSAGE</ButtonStyle>
  }

  return (
    <ButtonStyle onClick={() => console.log(usernameToMessage)}>MESSAGE</ButtonStyle>
  )
}

export { MessageButton }

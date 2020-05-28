/* eslint-disable jsx-a11y/label-has-associated-control */
// ^ a11y doesn't recognize styled-components input
import React from 'react'
import styled, { css } from 'styled-components'
import {
  Redirect,
  useHistory,
  Link,
} from 'react-router-dom'
import { darken, readableColor } from 'polished'
import { useForm } from 'react-hook-form'

import { SubmitButton } from '../../components/buttons'
import { useCurrentUserContext } from '../../contexts/CurrentUserProvider'
import { MaterialIcon } from '../../components/MaterialIcon'

const Container = styled.form`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor};
`

const LoginContainer = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.mediumHighlightedBoxShadow};
    border-radius: ${theme.largeBorderRadius};
    background-color: ${theme.lightEmphasisColor};
  `}
  width: 30%;
  min-width: 300px;
  height: 25%;
`

const LoggingInOverlay = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 25%;
  width: 30%;
  ${({ theme }) => css`
    border-radius: ${theme.largeBorderRadius};
    background-color: ${darken(0.9, theme.lightEmphasisColor)};
    font-size: ${theme.extraLargeFontSize};
    color: ${readableColor(darken(0.9, theme.lightEmphasisColor))};
  `};
`

const SegmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25%;
`

const LoginTitleMessage = styled.div`
  height: 100%;
  display: flex;    
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.largeFontSize};
`

const Input = styled.input`  
  display: flex;    
  justify-content: center;
  align-items: center;
`

const InputContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const PaddingLoginRow = styled.div`
  width: 100%;
  height: 20px;
`

const SubmitButtonWrapper = styled(SubmitButton)`
  background-color: ${({ theme }) => theme.lightFocusColor};
  min-width: 200px;
  width: 15%;
  height: 3%;
`

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.focusColor};
`

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 100%;
`

const SaveSessionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const LinkWrapper = styled(Link)`
  text-decoration: none;
`

const CloseContainer = styled.div`
  position: absolute;
`

// TODO: Split this page up. Too clunky
const LoginPage = () => {
  const history = useHistory()
  const { register, handleSubmit, getValues } = useForm()
  const [
    {
      loading,
      currentUser,
      rememberCurrentUser,
      authError,
    },
    { setRememberCurrentUser, getUserByLogin },
  ] = useCurrentUserContext()

  if (currentUser) {
    return <Redirect to="/" />
  }

  // TODO: specify data type
  const onSubmit = () => {
    console.log('try to login')
    getUserByLogin({
      variables: {
        username: getValues('username'),
        password: getValues('password'),
      },
    })
  }

  const toggleSaveSession = () => {
    setRememberCurrentUser(!rememberCurrentUser)
  }

  // TODO Material Icon Loading should use polish and theme for its color
  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <LoginContainer>
        {loading && <LoggingInOverlay>Loading...</LoggingInOverlay>}
        <CloseContainer>
          <MaterialIcon name="close" color={loading ? 'white' : 'black'} onClick={() => history.goBack()} />
        </CloseContainer>
        <SegmentContainer>
          <LoginTitleMessage>
            Login To Airdos
          </LoginTitleMessage>
        </SegmentContainer>
        <SegmentContainer>
          <InputContainer>
            <label htmlFor="username">
              Username
              <Input ref={register} type="text" id="username" name="username" />
            </label>
          </InputContainer>
        </SegmentContainer>
        <SegmentContainer>
          <InputContainer>
            <label htmlFor="password">
              Password
              <Input ref={register} type="text" id="password" name="password" />
            </label>
          </InputContainer>
          <SaveSessionContainer>
            <MaterialIcon size="16px" name={rememberCurrentUser ? 'check_box' : 'check_box_outline_blank'} onClick={toggleSaveSession} />
            Remember Me
          </SaveSessionContainer>
        </SegmentContainer>
        <SegmentContainer>
          <ErrorContainer>
            {authError}
          </ErrorContainer>
          <FooterContainer>
            <LinkWrapper to="/">Forgot Password/Username?</LinkWrapper>
            <LinkWrapper to="/">Sign Up</LinkWrapper>
          </FooterContainer>
        </SegmentContainer>
      </LoginContainer>
      <PaddingLoginRow />
      <SubmitButtonWrapper>
        {loading ? 'Logging You In' :' Login'}
      </SubmitButtonWrapper>
    </Container>
  )
}

export { LoginPage }

/* eslint-disable jsx-a11y/label-has-associated-control */
// ^ a11y doesn't recognize styled-components input
import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Redirect,
  useHistory,
  Link,
} from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { SubmitButton } from '../../components/buttons'
import { useUserContext, USER_ACTIONS } from '../../contexts/UserProvider'
import { useSession } from '../../hooks/useSession'
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
  box-shadow: ${({ theme }) => theme.mediumHighlightedBoxShadow};
  border-radius: ${({ theme }) => theme.largeBorderRadius};
  background-color: ${({ theme }) => theme.lightEmphasisColor};
  width: 30%;
  min-width: 300px;
  height: 25%;
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

const LoginPage = () => {
  const history = useHistory()
  const { register, handleSubmit } = useForm()
  const [{ userInfo }, dispatchUserEffect] = useUserContext()
  const [, establishSession] = useSession()
  const [error, setError] = useState<string | undefined>(undefined)
  const [saveSession, setSaveSession] = useState(false)

  // if the user is logged in, redirect them to home.
  if (userInfo) {
    return <Redirect to="/" />
  }

  // TODO: specify data type
  const onSubmit = (data: any) => {
    // Go to Database verify username and Password, return user
    dispatchUserEffect({
      type: USER_ACTIONS.LOGIN,
      payload: {
        username: data.username,
        password: data.password,
        onFailure: () => setError('Username or Password Incorrect!'),
        onSuccess: () => {
          if (saveSession) {
            establishSession('983')
          }
        },
      },
    })
  }

  const toggleSaveSession = () => {
    setSaveSession((currentSaveSession) => !currentSaveSession)
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <LoginContainer>
        <CloseContainer>
          <MaterialIcon name="close" onClick={() => history.goBack()} />
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
            <MaterialIcon size="16px" name={saveSession ? 'check_box' : 'check_box_outline_blank'} onClick={toggleSaveSession} />
            Remember Me
          </SaveSessionContainer>
        </SegmentContainer>
        <SegmentContainer>
          <ErrorContainer>
            {error && error}
          </ErrorContainer>
          <FooterContainer>
            <LinkWrapper to="/">Forgot Password/Username?</LinkWrapper>
            <LinkWrapper to="/">Sign Up</LinkWrapper>
          </FooterContainer>
        </SegmentContainer>
      </LoginContainer>
      <PaddingLoginRow />
      <SubmitButtonWrapper>
        Login
      </SubmitButtonWrapper>
    </Container>
  )
}
export { LoginPage }

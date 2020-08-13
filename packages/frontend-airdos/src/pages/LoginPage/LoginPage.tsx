/* eslint-disable jsx-a11y/label-has-associated-control */
// ^ a11y doesn't recognize styled-components input
import React from "react"
import styled, { css } from "styled-components"
import { useHistory, Link } from "react-router-dom"
import { darken, readableColor } from "polished"
import { useForm } from "react-hook-form"

import { SubmitButton } from "../../components/buttons"
import { useCurrentUserContext } from "../../contexts/CurrentUserProvider"
import { MaterialIcon } from "../../components/MaterialIcon"

const StyledContainer = styled.form`
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

const StyledLoginContainer = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.mediumHighlightedBoxShadow};
    border-radius: ${theme.largeBorderRadius};
    background-color: ${theme.lightEmphasisColor};
  `}
  width: 30%;
  min-width: 300px;
  height: 25%;
`

const StyledLoggingInOverlay = styled.div`
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

const StyledSegmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25%;
`

const StyledLoginTitleMessage = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.largeFontSize};
`

const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledInputContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const StyledPaddingLoginRow = styled.div`
  width: 100%;
  height: 20px;
`

const StyledSubmitButtonWrapper = styled(SubmitButton)`
  background-color: ${({ theme }) => theme.lightFocusColor};
  min-width: 200px;
  width: 15%;
  height: 3%;
`

const StyledErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.focusColor};
`

const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 100%;
`

const StyledSaveSessionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const StyledLinkWrapper = styled(Link)`
  text-decoration: none;
`

const StyledCloseContainer = styled.div`
  position: absolute;
`

// TODO: Split this page up. Too clunky
const LoginPage = () => {
  const history = useHistory()
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      username: "pmaier983",
      password: "bucketHat",
    },
  })

  const [
    { loading, currentUser, rememberCurrentUser, authError },
    { setRememberCurrentUser, getUserByLogin },
  ] = useCurrentUserContext()

  if (currentUser) {
    history.goBack()
  }

  // TODO: specify data type
  const onSubmit = () => {
    getUserByLogin({
      variables: {
        username: getValues("username"),
        password: getValues("password"),
      },
    })
  }

  const toggleSaveSession = () => {
    setRememberCurrentUser(!rememberCurrentUser)
  }

  // TODO Material Icon Loading should use polish and theme for its color
  return (
    <StyledContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledLoginContainer>
        {loading && <StyledLoggingInOverlay>Loading...</StyledLoggingInOverlay>}
        <StyledCloseContainer>
          <MaterialIcon
            name="close"
            color={loading ? "white" : "black"}
            onClick={() => history.goBack()}
          />
        </StyledCloseContainer>
        <StyledSegmentContainer>
          <StyledLoginTitleMessage>Login To Airdos</StyledLoginTitleMessage>
        </StyledSegmentContainer>
        <StyledSegmentContainer>
          <StyledInputContainer>
            <label htmlFor="username">
              Username
              <StyledInput
                ref={register}
                type="text"
                id="username"
                name="username"
              />
            </label>
          </StyledInputContainer>
        </StyledSegmentContainer>
        <StyledSegmentContainer>
          <StyledInputContainer>
            <label htmlFor="password">
              Password
              <StyledInput
                ref={register}
                type="text"
                id="password"
                name="password"
              />
            </label>
          </StyledInputContainer>
          <StyledSaveSessionContainer>
            <MaterialIcon
              size="16px"
              name={
                rememberCurrentUser ? "check_box" : "check_box_outline_blank"
              }
              onClick={toggleSaveSession}
            />
            Remember Me
          </StyledSaveSessionContainer>
        </StyledSegmentContainer>
        <StyledSegmentContainer>
          <StyledErrorContainer>{authError}</StyledErrorContainer>
          <StyledFooterContainer>
            <StyledLinkWrapper to="/">
              Forgot Password/Username?
            </StyledLinkWrapper>
            <StyledLinkWrapper to="/createUser">Sign Up</StyledLinkWrapper>
          </StyledFooterContainer>
        </StyledSegmentContainer>
      </StyledLoginContainer>
      <StyledPaddingLoginRow />
      <StyledSubmitButtonWrapper>
        {loading ? "Logging You In" : " Login"}
      </StyledSubmitButtonWrapper>
    </StyledContainer>
  )
}

export { LoginPage }

/* eslint-disable jsx-a11y/label-has-associated-control */
// ^ a11y doesn't recognize styled-components input
import React from "react"
import _ from "lodash/fp"
import styled, { css } from "styled-components"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"

import { MaterialIcon } from "../../components/MaterialIcon"
import { SubmitButton } from "../../components/buttons/SubmitButton"

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
  width: 40%;
  min-width: 300px;
  height: 50%;
  display: flex;
`

const StyledCloseContainer = styled.div`
  position: absolute;
`

const StyledContainerRowPadding = styled.div`
  height: 20px;
  width: 100%;
`

const StyledContentRowPadding = styled.div`
  height: 7px;
  width: 100%;
`

const StyledFormContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const StyledLabelRow = styled.label`
  display: flex;
  flex-direction: row;
`

const StyledLabelColumn = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledInput = styled.input`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledSubmitButton = styled(SubmitButton)`
  background-color: ${({ theme }) => theme.lightFocusColor};
  min-width: 200px;
  width: 15%;
  height: 30px;
`

const StyledErrorContainer = styled.div`
  color: ${({ theme }) => theme.focusColor};
`

const StyledPersonalNameContainer = styled.div`
  display: flex;
  flex-direction: row;
`

interface FormValues {
  id: number
  firstName: string
  password: string
  lastName: string
  username: string
  collegeName: string
}

const CreateUserPage: React.FC = () => {
  const history = useHistory()
  const { handleSubmit, register, errors } = useForm<FormValues>({
    defaultValues: {
      id: Math.random() * 10000,
      firstName: "",
      lastName: "",
      username: "",
      collegeName: "",
    },
  })

  const onSubmit = (formValues: FormValues) => {
    console.log(formValues)
  }

  return (
    <StyledContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledLoginContainer>
        <StyledCloseContainer>
          <MaterialIcon
            name="close"
            color="black"
            onClick={() => history.goBack()}
          />
        </StyledCloseContainer>
        <StyledFormContent>
          <StyledContainerRowPadding />
          <StyledLabelRow htmlFor="username">
            Username
            <StyledInput
              ref={register({ required: true })}
              type="text"
              id="username"
              name="username"
            />
          </StyledLabelRow>
          <StyledContentRowPadding />
          <StyledLabelRow htmlFor="password">
            Password
            <StyledInput
              ref={register({ required: true })}
              type="text"
              id="password"
              name="password"
            />
          </StyledLabelRow>
          <StyledContentRowPadding />
          <StyledPersonalNameContainer>
            <StyledLabelColumn htmlFor="firstName">
              First Name
              <StyledInput
                ref={register({ required: true })}
                type="text"
                id="firstName"
                name="firstName"
              />
            </StyledLabelColumn>
            <StyledContentRowPadding />
            <StyledLabelColumn htmlFor="lastName">
              Last Name
              <StyledInput
                ref={register({ required: true })}
                type="text"
                id="lastName"
                name="lastName"
              />
            </StyledLabelColumn>
          </StyledPersonalNameContainer>
          <StyledContentRowPadding />
          <StyledLabelRow htmlFor="collegeName">
            College
            <StyledInput
              ref={register}
              type="text"
              id="collegeName"
              name="collegeName"
            />
          </StyledLabelRow>
          <StyledContentRowPadding />
          <StyledContentRowPadding />
          <StyledSubmitButton>Sign Up!</StyledSubmitButton>
          <StyledContentRowPadding />
          <StyledErrorContainer>
            {!_.isEmpty(errors) &&
              "Username, First Name and Last Name are required to Sign Up"}
          </StyledErrorContainer>
        </StyledFormContent>
      </StyledLoginContainer>
    </StyledContainer>
  )
}

export { CreateUserPage }

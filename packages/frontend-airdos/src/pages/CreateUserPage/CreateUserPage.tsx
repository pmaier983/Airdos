import React from "react"
import styled from "styled-components"

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

const CreateUserPage: React.FC = () => {
  return <StyledContainer>HI</StyledContainer>
}

export { CreateUserPage }

import React from 'react'
import styled from 'styled-components'

import { MaterialIcon } from '../../components/MaterialIcon'
import { IUser } from '../../contexts/CurrentUserProvider'

const profilePicture = require('../../dud-data/userPhoto.png')

const StyledUserFactsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledProfilePicture = styled.img`
  width: 150px;
  height: 140px;
  border-radius: 50%; 
`

const StyledNameContainer = styled.span`
  font-size: ${({ theme }) => theme.mediumLargeFontSize};
`

const StyledSpacingProfileColumn = styled.div`
  width: 5px;
`

const StyledSpacingSubNameRow = styled.div`
  height: 5px;
`

const StyledSubInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledSpacingCrestColumn = styled.div`
  width: 5px;
`

const ProfilePageUserInfo = ({ name, username, collegeName }: IUser) => (
  <StyledUserFactsContainer>
    <StyledProfileContainer>
      <StyledProfilePicture src={profilePicture} />
      <StyledSpacingProfileColumn />
      <StyledProfileInfoContainer>
        <StyledNameContainer>
          {name}
        </StyledNameContainer>
        <StyledSpacingSubNameRow />
        <StyledSubInfoContainer>
          <MaterialIcon name="alternate_email" size="14px" />
          {username}
        </StyledSubInfoContainer>
        <StyledSpacingSubNameRow />
        <StyledSubInfoContainer>
          <MaterialIcon name="security" size="16px" />
          <StyledSpacingCrestColumn />
          {collegeName}
        </StyledSubInfoContainer>
      </StyledProfileInfoContainer>
    </StyledProfileContainer>
  </StyledUserFactsContainer>
)

export { ProfilePageUserInfo }

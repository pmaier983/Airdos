import React from 'react'
import styled from 'styled-components'

import { MaterialIcon } from '../../components/MaterialIcon'
import { IUserInfo } from '../../contexts/UserProvider'

const profilePicture = require('../../dud-data/userPhoto.png')

const UserFactsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ProfilePicture = styled.img`
  width: 150px;
  height: 140px;
  border-radius: 50%; 
`

const NameContainer = styled.span`
  font-size: ${({ theme }) => theme.mediumLargeFontSize};
`

const SpacingProfileColumn = styled.div`
  width: 5px;
`

const SpacingSubNameRow = styled.div`
  height: 5px;
`

const SubInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const SpacingCrestColumn = styled.div`
  width: 5px;
`

const ProfilePageUserInfo = ({ name, username, collegeName }: IUserInfo) => (
  <UserFactsContainer>
    <ProfileContainer>
      <ProfilePicture src={profilePicture} />
      <SpacingProfileColumn />
      <ProfileInfoContainer>
        <NameContainer>
          {name}
        </NameContainer>
        <SpacingSubNameRow />
        <SubInfoContainer>
          <MaterialIcon name="alternate_email" size="14px" />
          {username}
        </SubInfoContainer>
        <SpacingSubNameRow />
        <SubInfoContainer>
          <MaterialIcon name="security" size="16px" />
          <SpacingCrestColumn />
          {collegeName}
        </SubInfoContainer>
      </ProfileInfoContainer>
    </ProfileContainer>
  </UserFactsContainer>
)

export { ProfilePageUserInfo }

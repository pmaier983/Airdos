import React from 'react'
import styled from 'styled-components'

import { GroupPageNavigation } from './GroupPageNavigation'

interface IGroupPage {
  pathGroupName: string
}

const StyledGroupPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledGroupName = styled.div`
  font-size: ${({ theme }) => theme.extraLargeFontSize};
`

const StyledGroupDetails = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledGroupDetail = styled.span`
  font-size: ${({ theme }) => theme.mediumFontSize};
  color: ${({ theme }) => theme.lightGlobalFontColor};
`

const StyledPaddingColumnGroupDetail = styled.div`
  width: 20px;
`

const StyledPaddingColumn = styled.div`
  height: 20px;
`

const GroupPage: React.FC<IGroupPage> = ({ pathGroupName }) => {
  const groupName = pathGroupName.replace(/_/g, ' ')

  const memberCount = 13
  const adminCount = 2
  // query group
  // check if is private group with user in it.
  console.log('query for group and stuff')
  return (
    <StyledGroupPageContainer>
      <StyledHeaderContainer>
        <StyledGroupName>
          {groupName}
        </StyledGroupName>
        <StyledGroupDetails>
          <StyledGroupDetail>
            Member Count:
            {' '}
            {memberCount}
          </StyledGroupDetail>
          <StyledPaddingColumnGroupDetail />
          <StyledGroupDetail>
            Admin Count:
            {' '}
            {adminCount}
          </StyledGroupDetail>
        </StyledGroupDetails>
      </StyledHeaderContainer>
      <StyledPaddingColumn />
      <GroupPageNavigation />
    </StyledGroupPageContainer>
  )
}

export { GroupPage }

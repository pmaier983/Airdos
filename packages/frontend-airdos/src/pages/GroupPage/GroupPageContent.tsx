import React, { memo } from 'react'
import styled from 'styled-components'

import { GroupPageNavigation } from './GroupPageNavigation'

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

interface IGroupPage {
  pathGroupName?: string
}

const GroupPageContent: React.FC<IGroupPage> = ({ pathGroupName, children }) => {
  const groupName = pathGroupName ? pathGroupName?.replace(/_/g, ' ') : 'Something Went Wrong'

  console.log('reRender GroupPage')

  const memberCount = 13
  const adminCount = 2
  // query group
  // check if is private group with user in it.
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
      <GroupPageNavigation groupName={groupName} />
      {children}
    </StyledGroupPageContainer>
  )
}

export { GroupPageContent }

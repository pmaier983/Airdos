import React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"

import { GET_GROUP_BY_NAME } from "./GroupPageQueries"
import { Group } from "../../typings/api"
import { GroupPageNavigation } from "./GroupPageNavigation"

const StyledFixedHeaderContainer = styled.div`
  position: sticky;
  /* TODO: makes this part of theme*/
  top: 0;
  padding-top: 10px;
  /* TODO: make a better solution then this*/
  width: 101%;
  align-self: center;
  background-color: ${({ theme }) => theme.backgroundColor};
`

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

const GroupPageContent: React.FC<IGroupPage> = ({
  pathGroupName,
  children,
}) => {
  const { data, loading, error } = useQuery<{ groupByName: Group }>(
    GET_GROUP_BY_NAME,
    {
      variables: {
        name: pathGroupName,
      },
    }
  )

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>This group was not found</div>
  }

  const memberCount = 13
  const adminCount = 2
  // query group
  // check if is private group with user in it.
  return (
    <StyledGroupPageContainer>
      <StyledFixedHeaderContainer>
        <StyledHeaderContainer>
          <StyledGroupName>{data.groupByName.displayName}</StyledGroupName>
          <StyledGroupDetails>
            <StyledGroupDetail>
              Member Count:
              {memberCount}
            </StyledGroupDetail>
            <StyledPaddingColumnGroupDetail />
            <StyledGroupDetail>
              Admin Count:
              {adminCount}
            </StyledGroupDetail>
          </StyledGroupDetails>
        </StyledHeaderContainer>
        <StyledPaddingColumn />
        <GroupPageNavigation group={data.groupByName} />
      </StyledFixedHeaderContainer>
      {children}
    </StyledGroupPageContainer>
  )
}

export { GroupPageContent }

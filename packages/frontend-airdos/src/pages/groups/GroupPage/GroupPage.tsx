import React from "react"
import styled from "styled-components"
import _ from "lodash/fp"
import { useLocation } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"

import type { Group } from "../../../typings/api"

import { GET_GROUP_BY_NAME } from "./GroupPageQueries"
import { GroupPageNavigation } from "./GroupPageNavigation"
import { GroupPageRouter } from "./GroupPageRouter"

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

const getUrlGroupName = (path: string) => {
  const splitPath = path.split("/")
  const profileIndex = _.findIndex(
    (pathSegment) => pathSegment === "groups",
    splitPath
  )
  return splitPath[profileIndex + 1]
}

const GroupPage: React.FC = () => {
  // TODO: handle this so that it can handle paths that are not Groups after /groups
  // TODO: make context?
  const { pathname } = useLocation()
  const { data, loading, error } = useQuery<{ groupByName: Group }>(
    GET_GROUP_BY_NAME,
    {
      variables: {
        name: getUrlGroupName(pathname),
      },
    }
  )

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>This group was not found</div>
  }

  const group = data.groupByName

  const memberCount = 13
  const adminCount = 2

  return (
    <StyledGroupPageContainer>
      <StyledFixedHeaderContainer>
        <StyledHeaderContainer>
          <StyledGroupName>{group.displayName}</StyledGroupName>
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
        <GroupPageNavigation group={group} />
      </StyledFixedHeaderContainer>
      <GroupPageRouter group={group} />
    </StyledGroupPageContainer>
  )
}

export { GroupPage }

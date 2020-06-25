import React from "react"
import _ from "lodash/fp"
import styled from "styled-components"
import { useCurrentUserContext } from "../../contexts/CurrentUserProvider"

import { AcceptButton } from "../../components/buttons"
import { GroupList } from "../../components/GroupList"

const StyledNoGroupsMessage = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.mediumFontSize};
  color: ${({ theme }) => theme.lightGlobalFontColor};
`

const StyledPaddingRow = styled.div`
  height: 10px;
`

const GroupNavigationWrapper: React.FC = ({ children }) => (
  <>
    <AcceptButton />
    <StyledPaddingRow />
    {children}
  </>
)

// TODO: Appropriately size the add icon
const LandingPageGroupNavigation: React.FC = () => {
  const [{ currentUser, loading, error }] = useCurrentUserContext()

  if (error || !currentUser) {
    return (
      <GroupNavigationWrapper>
        <StyledNoGroupsMessage>
          You&apos;ve not joined any groups yet!
        </StyledNoGroupsMessage>
      </GroupNavigationWrapper>
    )
  }

  // TODO: Create a Loading Animation
  if (loading) {
    return (
      <GroupNavigationWrapper>
        <StyledNoGroupsMessage>Loading...</StyledNoGroupsMessage>
      </GroupNavigationWrapper>
    )
  }

  const groupList: string[] = _.slice(
    0,
    4,
    _.get("chosenGroups", currentUser) || _.get("groups", currentUser)
  )

  return (
    <GroupNavigationWrapper>
      <GroupList list={groupList} />
    </GroupNavigationWrapper>
  )
}

export { LandingPageGroupNavigation }

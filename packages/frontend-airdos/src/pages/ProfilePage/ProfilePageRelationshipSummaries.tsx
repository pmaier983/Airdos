import React from 'react'
import styled from 'styled-components'
import {
  Link,
} from 'react-router-dom'

const RelationshipContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.mediumFontSize};
`

const PaddingBetweenRelationshipsRow = styled.div`
  height: 5px;
  width: 100%;
`

const BoldText = styled.strong`
  font-weight: ${({ theme }) => theme.strongFontWeight};
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.globalFontColor};
  :hover {
    color: ${({ theme }) => theme.highlightedFontColor};
  }
`

interface IProfilePageRelationshipSummariesProps {
  followerList: string[],
  groupList: string[],
}

const renderFollowerSummary = (followerList: string[]) => {
  // TODO: Redo this logic
  if (!followerList) {
    return 'This user has disabled their follower list for you'
  }
  const numberOfFollowers = followerList.length
  if (numberOfFollowers <= 0) { return 'NOT FOLLOWED BY ANYONE YET' }
  const keyFollower = followerList[0]
  return (
    <span>
      FOLLOWED BY
      {' '}
      <BoldText>{numberOfFollowers}</BoldText>
      {' '}
      {numberOfFollowers === 1 ? 'PERSON' : 'PEOPLE'}
      {' '}
      INCLUDING:
      {' '}
      <StyledLink to={keyFollower}>{keyFollower}</StyledLink>
    </span>
  )
}

const renderGroupSummary = (groupList: string[]) => {
  // TODO: Redo this logic
  if (!groupList) {
    return 'This user has disabled their group list for you'
  }
  const numberOfGroups = groupList.length
  if (numberOfGroups <= 0) { return 'NOT A PART OF ANY GROUP YET' }
  const keyGroup = groupList[0]
  return (
    <span>
      MEMBER OF
      {' '}
      <BoldText>{numberOfGroups}</BoldText>
      {' '}
      {numberOfGroups === 1 ? 'GROUP' : 'GROUP\'s'}
      {' '}
      INCLUDING:
      {' '}
      {keyGroup}
    </span>
  )
}

const ProfilePageRelationshipSummaries: React.FC<IProfilePageRelationshipSummariesProps> = (
  { followerList, groupList },
) => (
  <RelationshipContainer>
    {renderFollowerSummary(followerList)}
    <PaddingBetweenRelationshipsRow />
    {renderGroupSummary(groupList)}
  </RelationshipContainer>
)


export { ProfilePageRelationshipSummaries }

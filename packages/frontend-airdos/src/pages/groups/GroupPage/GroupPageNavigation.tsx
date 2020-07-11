import React, { useContext } from "react"
import styled, { css, ThemeContext } from "styled-components"
import { NavLink } from "react-router-dom"

import { Group } from "../../../typings/api"

const StyledNavContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledRowLine = styled.div`
  width: 100%;
  height: 1px;
  ${({ theme }) => css`
    background-color: ${theme.darkBorderColor};
    border-radius: ${theme.largeBorderRadius};
  `}
`

const StyledNavButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const StyledNavButton = styled(NavLink)`
  padding: 2px 5px;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
  ${({ theme }) => css`
    color: ${theme.globalFontColor};
    box-shadow: 0 0 0 1px ${theme.darkBorderColor};
    border-radius: ${theme.normalBorderRadius} ${theme.normalBorderRadius} 0px
      0px;
    font-size: ${theme.mediumFontSize};
  `}
`

const GroupPageNavigation: React.FC<{ group: Group }> = ({ group }) => {
  const theme = useContext(ThemeContext)
  const groupName = group.name
  return (
    <StyledNavContainer>
      <StyledNavButtonContainer>
        <StyledNavButton
          to={`/groups/${groupName}/feed`}
          activeStyle={{
            color: theme.highlightedFontColor,
          }}
        >
          Feed
        </StyledNavButton>
        {/* <StyledNavButton
          to={`/groups/${groupName}/files`}
          activeStyle={{
            color: theme.highlightedFontColor,
          }}
        >
          Files
        </StyledNavButton> */}
        <StyledNavButton
          to={`/groups/${groupName}/members`}
          activeStyle={{
            color: theme.highlightedFontColor,
          }}
        >
          Members
        </StyledNavButton>
        <StyledNavButton
          to={`/groups/${groupName}/settings`}
          activeStyle={{
            color: theme.highlightedFontColor,
          }}
        >
          Settings
        </StyledNavButton>
      </StyledNavButtonContainer>
      <StyledRowLine />
    </StyledNavContainer>
  )
}

export { GroupPageNavigation }

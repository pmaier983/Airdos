import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import styled, { css, ThemeContext } from "styled-components"

const StyledButton = styled(NavLink)`
  ${({ theme }) => css`
    color: ${theme.globalFontColor};
    box-shadow: 0 0 0 ${theme.normalBorderWidth} ${theme.darkBorderColor};
    border-radius: ${theme.largeBorderRadius};
    font-size: ${theme.mediumFontSize};
    :hover {
      cursor: pointer;
      background-color: ${theme.strongEmphasisColor};
    }
    :active {
      cursor: grabbing;
      background-color: ${theme.strongEmphasisColor};
    }
  `};
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
`

interface IGroupButtonProps {
  path: string
}

// TODO: Make Reusable if needed
const GroupButton: React.FC<IGroupButtonProps> = ({
  children,
  path,
  ...props
}) => {
  const theme = useContext(ThemeContext)
  return (
    <StyledButton
      {...props}
      to={path}
      className="react-grid-handle-drag"
      activeStyle={{
        color: theme.highlightedFontColor,
        boxShadow: `0 0 0 ${theme.normalBorderWidth} ${theme.highlightedFontColor}`,
        backgroundColor: theme.lightFocusColor,
      }}
    >
      {children}
    </StyledButton>
  )
}

export { GroupButton }

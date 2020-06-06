import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => (theme.globalFontColor)};
  font-size: ${({ theme }) => theme.largeFontSize};
`

interface IActiveStyleNavLinkProps {
  to: string,
}

const ActiveStyleNavLink: React.FC<IActiveStyleNavLinkProps> = (
  { to, children },
) => {
  const theme = useContext(ThemeContext)
  return (
    <StyledNavLink
      to={to}
      strict={false}
      activeStyle={{
        color: theme.highlightedFontColor,
      }}
    >
      {children}
    </StyledNavLink>
  )
}

export { ActiveStyleNavLink }

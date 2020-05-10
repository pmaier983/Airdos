import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { theme as directTheme } from '../theme'

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
) => (
  <StyledNavLink
    to={to}
    strict={false}
    activeStyle={{
      color: directTheme.highlightedFontColor,
    }}
  >
    {children}
  </StyledNavLink>
)

export { ActiveStyleNavLink }

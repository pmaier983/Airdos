/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { forwardRef } from 'react'
import _ from 'lodash/fp'
import styled from 'styled-components'

interface IconStylingProps {
  size?: string,
  color?: string,
  onclick?: () => void,
  hasHoverEffect?: boolean,
  width?: string,
  alignSelf?: string,
  overflow?: string,
  display?: string,
  role?: string,
}

interface IMaterialIconsProps extends IconStylingProps {
  name: string,
  onClick?: () => any,
}

const ICON_THEMES = {
  FILLED: '',
  OUTLINED: '-outlined',
  ROUNDED: '-round',
  TWOTONE: '-two-tone',
  SHARP: '-sharp',
}

const IconContainer = styled.div<IconStylingProps>`
  display: ${({ display }) => display};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : undefined)};
  align-self: ${({ alignSelf }) => alignSelf};
`

// TODO: avoid using !important
// TODO: how to add rgba to theme.
const Icon = styled.i<IconStylingProps>`
  overflow: ${({ overflow }) => overflow};
  font-size: ${({ size }) => size} !important;
  color: ${({ color }) => color}; 
  width: ${({ width, size }) => width || size};
  &:hover {
    background: ${({ hasHoverEffect, theme }) => hasHoverEffect && theme.focusColor};
    border-radius: 20px;
  }
`

// TODO: correctly manage onKeyPress, role and tabIndex...
// TODO: clarify React.Ref attributes
const MaterialIcon = forwardRef(
  ({
    name, role, onClick, alignSelf, display, ...props
  }: IMaterialIconsProps, buttonRef: React.Ref<any>) => {
    const materialTheme = _.get(_.flow(_.split('_'), _.last, _.toUpper)(name), ICON_THEMES)
    return (
      <IconContainer
        role={role || (onClick && 'button')}
        onClick={onClick}
        onKeyPress={onClick}
        alignSelf={alignSelf}
        display={display}
        ref={buttonRef}
      >
        <Icon {...props} className={materialTheme ? `material-icons${materialTheme}` : 'material-icons'}>
          {name}
        </Icon>
      </IconContainer>
    )
  },
)

export { MaterialIcon }

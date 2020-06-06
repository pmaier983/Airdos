import React from 'react'
import { createGlobalStyle, css } from 'styled-components'

import 'react-grid-layout/css/styles.css'
import { Responsive, WidthProvider } from 'react-grid-layout'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

const StyledGlobalPlaceholder = createGlobalStyle`
  .react-grid-item.react-grid-placeholder {
    ${({ theme }) => css`
      box-shadow: 0 0 0 ${theme.normalBorderWidth} ${theme.darkBorderColor};
      border-radius: ${theme.largeBorderRadius};
      font-size: ${theme.mediumFontSize};
      background-color: ${theme.strongEmphasisColor};
    `}
  }
`

// TODO: make more re-usable
const ResponsiveGridLayout: React.FC = ({ children, layouts, ...props }: any) => (
  <>
    <StyledGlobalPlaceholder />
    <ResponsiveReactGridLayout
      rowHeight={30}
      cols={{
        lg: 1, md: 1, sm: 1, xs: 1, xxs: 1,
      }}
      rows={2}
      breakpoints={{
        lg: 1200, md: 1024, sm: 768, xs: 568, xxs: 320,
      }}
      isResizable={false}
      layouts={layouts}
      draggableCancel=".react-grid-cancel-drag"
      draggableHandle=".react-grid-handle-drag"
      {...props}
    >
      {children}
    </ResponsiveReactGridLayout>
  </>
)


export { ResponsiveGridLayout }

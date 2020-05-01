import { colors } from './colors'

export const basicTheme = {
  backgroundColor: `rgb(${colors.white})`,
  spacingColor: `rgb(${colors.grey})`,
  focusColor: `rgb(${colors.red})`,

  // Borders
  borderColor: `rgb(${colors.grey})`,
  borderStyle: 'solid',
  borderWidth: '1px',

  normalBorderRadius: '2px',
  searchBubbleBorderRadius: '20px',

  // Fonts
  primaryGlobalFont: 'Red Hat Text',
  secondaryGlobalFont: 'sans-serif',
  globalFontColor: `rgb(${colors.black})`,
  highlightedFontColor: `rgb(${colors.red})`,

  largeFontSize: '20px',
  mediumFontSize: '16px',
  normalFontSize: '12px',
}

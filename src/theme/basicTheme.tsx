import { colors } from './colors'

export const basicTheme = {
  backgroundColor: `rgb(${colors.white})`,
  spacingColor: `rgb(${colors.grey})`,
  focusColor: `rgb(${colors.red})`,
  lightFocusColor: `rgb(${colors.red.replace(/ /g, ',')}, 0.3)`,
  contrastFocusColor: `rgb(${colors.white})`,
  lightEmphasisColor: `rgb(${colors.grey.replace(/ /g, ',')}, 0.4)`,

  // Borders
  borderColor: `rgb(${colors.grey})`,
  borderStyle: 'solid',
  normalBorderWidth: '1px',
  mediumBorderWidth: '3px',
  largeBorderWidth: '5px',

  normalBorderRadius: '2px',
  largeBorderRadius: '10px',
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

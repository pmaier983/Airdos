import { colors } from './colors'

export const basicTheme = {
  backgroundColor: `rgb(${colors.white.replace(/ /g, ',')})`,
  spacingColor: `rgb(${colors.grey.replace(/ /g, ',')})`,
  focusColor: `rgb(${colors.red.replace(/ /g, ',')})`,
  lightFocusColor: `rgba(${colors.red.replace(/ /g, ',')}, 0.1)`,
  contrastFocusColor: `rgb(${colors.white.replace(/ /g, ',')})`,
  lightEmphasisColor: `rgba(${colors.grey.replace(/ /g, ',')}, 0.4)`,
  acceptColor: `rgb(${colors.green.replace(/ /g, ',')})`,
  lightAcceptColor: `rgba(${colors.green.replace(/ /g, ',')}, 0.07)`,

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
  lightContrastFontColor: `rgb(${colors.white})`,
  darkContrastFontColor: `rgb(${colors.black})`,

  extraLargeFontSize: '40px',
  largeFontSize: '20px',
  mediumLargeFontSize: '18px',
  mediumFontSize: '16px',
  normalFontSize: '12px',

  normalFontWeight: 400,
  strongFontWeight: 700,
}

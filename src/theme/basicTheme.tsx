import { colors } from './colors'

export interface IBasicTheme {
  backgroundColor: string,
  spacingColor: string,
  focusColor: string,
  lightFocusColor: string,
  contrastFocusColor: string,
  lightEmphasisColor: string,
  borderColor: string,
  borderStyle: string,
  normalBorderWidth: string,
  mediumBorderWidth: string,
  largeBorderWidth: string,
  normalBorderRadius: string,
  largeBorderRadius: string,
  searchBubbleBorderRadius: string,
  primaryGlobalFont: string,
  secondaryGlobalFont: string,
  globalFontColor: string,
  highlightedFontColor: string,
  largeFontSize: string,
  mediumLargeFontSize: string,
  mediumFontSize: string,
  normalFontSize: string,
  normalFontWeight: number,
  strongFontWeight: number,
}

export const basicTheme: IBasicTheme = {
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
  mediumLargeFontSize: '18px',
  mediumFontSize: '16px',
  normalFontSize: '12px',

  normalFontWeight: 400,
  strongFontWeight: 700,
}

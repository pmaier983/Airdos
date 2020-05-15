import { basicTheme } from './basicTheme'

export interface IAdvancedTheme {
  basicBoxShadow: string,
  normalHighlightedBoxShadow: string,
  mediumHighlightedBoxShadow: string,
  normalFontFamily: string,
}

export const advancedTheme: IAdvancedTheme = {
  basicBoxShadow: `0 0 0 ${basicTheme.normalBorderWidth} ${basicTheme.borderColor}`,
  normalHighlightedBoxShadow: `0 0 0 ${basicTheme.normalBorderWidth} ${basicTheme.focusColor}`,
  mediumHighlightedBoxShadow: `0 0 0 ${basicTheme.mediumBorderWidth} ${basicTheme.focusColor}`,
  normalFontFamily: `${basicTheme.primaryGlobalFont}, ${basicTheme.secondaryGlobalFont}`,
}

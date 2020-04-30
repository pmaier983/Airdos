import _ from 'lodash/fp'

import { theme as basicTheme } from './theme'
import { advancedTheme } from './advancedTheme'

export const theme = _.merge(basicTheme, advancedTheme)

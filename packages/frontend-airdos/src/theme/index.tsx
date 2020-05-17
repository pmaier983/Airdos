import _ from 'lodash/fp'

import { basicTheme, IBasicTheme } from './basicTheme'
import { advancedTheme, IAdvancedTheme } from './advancedTheme'

interface ITheme extends IBasicTheme, IAdvancedTheme {}

export const theme: ITheme = _.merge(basicTheme, advancedTheme)

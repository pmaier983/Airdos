import _ from "lodash/fp"

import { basicTheme } from "./basicTheme"
import { advancedTheme } from "./advancedTheme"

export const theme = _.merge(basicTheme, advancedTheme)

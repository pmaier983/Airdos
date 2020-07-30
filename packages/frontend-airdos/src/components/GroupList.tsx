import React, { useMemo } from "react"

import { ResponsiveGridLayout } from "./grid"
import { GroupButton } from "./buttons"

import type { ValueLabelNode } from "../typings/api"

const GroupList: React.FC<{ list: ValueLabelNode[] }> = ({ list }) => {
  const children = useMemo(
    () =>
      list.map(({ value, label }) => (
        <GroupButton key={value} path={`/groups/${value}`}>
          {label}
        </GroupButton>
      )),
    [list]
  )

  return <ResponsiveGridLayout>{children}</ResponsiveGridLayout>
}

export { GroupList }

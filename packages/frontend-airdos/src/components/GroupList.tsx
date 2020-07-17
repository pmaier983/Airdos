import React, { useMemo } from "react"

import { ResponsiveGridLayout } from "./grid"
import { GroupButton } from "./buttons"

interface IGroupListProps {
  list: { label: string; value: string }[]
}

const GroupList: React.FC<IGroupListProps> = ({ list }) => {
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

import React, { useMemo } from "react"

import { ResponsiveGridLayout } from "./grid"
import { GroupButton } from "./buttons"

interface IGroupListProps {
  list: string[]
}

const GroupList: React.FC<IGroupListProps> = ({ list }) => {
  const children = useMemo(
    () =>
      list.map((groupName) => (
        <GroupButton
          key={groupName}
          path={`/groups/${groupName.replace(/ /g, "_")}`}
        >
          {groupName}
        </GroupButton>
      )),
    [list]
  )

  return <ResponsiveGridLayout>{children}</ResponsiveGridLayout>
}

export { GroupList }

import React from "react"

import { useCurrentUserContext } from "../../contexts/CurrentUserProvider"

const GroupsPage: React.FC = () => {
  const [{ currentUser, loading }] = useCurrentUserContext()

  if (loading) {
    return <div>Loading</div>
  }

  if (currentUser) {
    return <div>Logged In User Goes to Their Group Management Page</div>
  }

  return <div>Anon User Goes to Group Page</div>
}

export { GroupsPage }

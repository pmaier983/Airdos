export type Post = {
  id: string
  location: string
  title: string
  postType: string
  text: string
}

export type User = {
  id: string
  name: string
  firstName: string
  lastName: string
  username: string
  groups: { label: string; value: string }[]
  chosenGroups: { label: string; value: string }[]
  collegeName: string
  followers: [string]
  following: [string]
}

export type Group = {
  id: string
  name: string
  displayName: string
  posts: [Post]
  members: [string]
  admins: [string]
  private: boolean
}

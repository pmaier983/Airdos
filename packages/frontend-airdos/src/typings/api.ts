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

export type Post = {
  id: number
  group: {
    label: string
    value: string
  }
  user: string
  title: string
  text: string
  replies: boolean
  timeCreated: number
  attachmentLink: string
  likes: number
}

export type Thread = {
  id: number
  group: { label: string; value: string }
  user: string
  text: string
  timeCreated: number
  childrenIds: number[]
  parentId: number
  replies?: Thread[]
}

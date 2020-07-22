import gql from "graphql-tag"

export const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      group {
        label
        value
      }
      user
      title
      text
      replies
      timeCreated
      attachmentLink
      likes
    }
  }
`

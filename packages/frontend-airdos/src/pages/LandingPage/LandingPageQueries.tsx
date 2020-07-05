import gql from "graphql-tag"

export const GET_POSTS = gql`
  query getPosts {
    posts {
      location
      title
      postType
      text
    }
  }
`

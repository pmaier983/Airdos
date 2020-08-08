import gql from "graphql-tag"

export const GET_GROUP_BY_NAME = gql`
  query getGroupByName($name: String!) {
    getGroupByName(name: $name) {
      name
      displayName
      members
    }
  }
`

export const GET_GROUP_POSTS_BY_NAME = gql`
  query getGroupByName($name: String!) {
    getGroupByName(name: $name) {
      posts {
        text
      }
    }
  }
`

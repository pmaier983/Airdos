import gql from "graphql-tag"

export const GET_GROUP_BY_NAME = gql`
  query getGroupByName($name: String!) {
    groupByName(name: $name) {
      name
      displayName
      posts {
        location
        text
      }
      members
    }
  }
`

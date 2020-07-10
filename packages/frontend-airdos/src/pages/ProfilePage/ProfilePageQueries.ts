import gql from "graphql-tag"

export const GET_USER_BY_USERNAME = gql`
  query getUserByUsername($username: String!) {
    userByUsername(username: $username) {
      id
      name
      firstName
      lastName
      username
      groups
      chosenGroups
      collegeName
      followers
      following
    }
  }
`

import gql from "graphql-tag"

export const GET_USER_BY_USERNAME = gql`
  query getUserByUsername($username: String!) {
    getUserByUsername(username: $username) {
      id
      name
      firstName
      lastName
      username
      groups {
        label
        value
      }
      chosenGroups {
        label
        value
      }
      collegeName
      followers
      following
    }
  }
`

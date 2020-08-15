import gql from "graphql-tag"

export const UserFragment = gql`
  fragment UserFragment on User {
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
`

export const GET_USER_BY_TOKEN = gql`
  query getUserByToken($token: String!) {
    getUserByToken(token: $token) {
      ...UserFragment
    }
  }
  ${UserFragment}
`

export const GET_USER_BY_LOGIN = gql`
  query getUserByLogin($username: String!, $password: String!) {
    getUserByLogin(username: $username, password: $password) {
      ...UserFragment
    }
  }
  ${UserFragment}
`

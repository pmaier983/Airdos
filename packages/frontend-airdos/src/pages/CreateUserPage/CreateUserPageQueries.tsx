import gql from "graphql-tag"
import { UserFragment } from "../../contexts/CurrentUserQueries"

export const ADD_USER = gql`
  mutation addUser($user: AddUserInput!) {
    addUser(user: $user) {
      ...UserFragment
    }
  }
  ${UserFragment}
`

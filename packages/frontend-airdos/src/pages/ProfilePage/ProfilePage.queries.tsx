import { gql } from 'apollo-boost'

const GET_USERINFO = gql`
  query getProfile($username: String!){ 
    user(username: $username) {
      id
      name
      firstName
      lastName
      username
      groups
      collegeName
    }
  }
`

export { GET_USERINFO }

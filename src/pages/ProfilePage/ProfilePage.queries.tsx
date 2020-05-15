import { gql } from 'apollo-boost'

const GET_USERINFO = gql`
  query getProfile($userName: String!){ 
    user(login: $userName) {
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

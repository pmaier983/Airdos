import gql from 'graphql-tag'

const GET_USERINFO = gql`
  query getProfile($username: String!){ 
    user(username: $username) {
      id
      name
      firstName
      lastName
      username
      groups
      followers
      collegeName
    }
  }
`

export { GET_USERINFO }

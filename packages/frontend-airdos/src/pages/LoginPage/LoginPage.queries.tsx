import gql from 'graphql-tag'

const VERIFY_USER = gql`
  query verifyUser($username: String!, $password: String!) {
    verifyUser(username: $username, password: $password)
  }
`

export { VERIFY_USER }

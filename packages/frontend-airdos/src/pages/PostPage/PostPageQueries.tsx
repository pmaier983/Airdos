import gql from "graphql-tag"

const PostFragment = gql`
  fragment PostFragment on Post {
    id
    group {
      value
      label
    }
    user
    text
    timeCreated
    childrenIds
    parentId
  }
`

export const GET_POST_BY_ID = gql`
  query getPostById($id: String!) {
    getPostById(id: $id) {
      text
      group {
        label
        value
      }
      user
      timeCreated
      replies {
        ...PostFragment
        replies {
          ...PostFragment
          replies {
            ...PostFragment
            replies {
              ...PostFragment
              replies {
                ...PostFragment
              }
            }
          }
        }
      }
    }
  }
  ${PostFragment}
`

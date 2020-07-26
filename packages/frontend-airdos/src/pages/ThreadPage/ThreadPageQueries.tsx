import gql from "graphql-tag"

const ThreadFragment = gql`
  fragment ThreadFragment on Thread {
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

export const GET_THREAD_BY_ID = gql`
  query threadById($id: String!) {
    threadById(id: $id) {
      text
      group {
        label
        value
      }
      user
      timeCreated
      replies {
        ...ThreadFragment
        replies {
          ...ThreadFragment
          replies {
            ...ThreadFragment
            replies {
              ...ThreadFragment
              replies {
                ...ThreadFragment
              }
            }
          }
        }
      }
    }
  }
  ${ThreadFragment}
`

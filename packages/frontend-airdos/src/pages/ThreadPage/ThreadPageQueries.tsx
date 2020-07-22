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
  query getUserByUsername($id: number!) {
    threadById(id: 100) {
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

import gql from 'graphql-tag'

// TODO: how to colocate this with graphql api?
enum PostTypeEnum {
  PUBLICIZING_RESEARCH = "PUBLICIZING_RESEARCH",
  PRE_PEER_REVIEW = "PRE_PEER_REVIEW",
  DISCUSSION_TOPIC = "DISCUSSION_TOPIC",
  CONFERENCE_AWARENESS = "CONFERENCE_AWARENESS",
  NONE = "NONE",
}

interface IPost {
  location: string,
  title: string,
  postType: PostTypeEnum,
  text: string,
}

export interface IGetPosts {
  posts: [IPost]
}

const GET_POSTS = gql`
  query getPosts { 
    posts {
      location
      title
      postType
      text
    }
  }
`

export { GET_POSTS }

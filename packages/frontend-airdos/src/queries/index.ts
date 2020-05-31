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

const GET_USER_BY_LOGIN = gql`
  query getUserByLogin($username: String!, $password: String!) {
    userByLogin(username: $username, password: $password) {
      id
      name
      firstName
      lastName
      username
      groups
      collegeName
      followers
      following
    }
  }
`

const GET_USER_BY_USERNAME = gql`
  query getUserByUsername($username: String!) { 
    userByUsername(username: $username) {
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

const GET_USER_BY_TOKEN = gql`
  query getUserByToken($token: String!) {
    userByToken(token: $token) {
      id
      name
      firstName
      lastName
      username
      groups
      collegeName
      followers
      following
    }
  }
`

export {
  GET_POSTS, GET_USER_BY_LOGIN, GET_USER_BY_USERNAME, GET_USER_BY_TOKEN,
}

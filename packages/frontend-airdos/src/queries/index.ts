import gql from "graphql-tag"

// TODO: how to colocate this with graphql api?
enum PostTypeEnum {
  PUBLICIZING_RESEARCH = "PUBLICIZING_RESEARCH",
  PRE_PEER_REVIEW = "PRE_PEER_REVIEW",
  DISCUSSION_TOPIC = "DISCUSSION_TOPIC",
  CONFERENCE_AWARENESS = "CONFERENCE_AWARENESS",
  NONE = "NONE",
}

interface IPost {
  location: string
  title: string
  postType: PostTypeEnum
  text: string
}

export interface IGetPosts {
  posts: [IPost]
}

const UserFragment = gql`
  fragment UserFragment on User {
    id
    name
    firstName
    lastName
    username
    groups
    chosenGroups
    collegeName
    followers
    following
  }
`

export const GET_USER_BY_LOGIN = gql`
  query getUserByLogin($username: String!, $password: String!) {
    userByLogin(username: $username, password: $password) {
      ...UserFragment
    }
  }
  ${UserFragment}
`

export const GET_USER_BY_USERNAME = gql`
  query getUserByUsername($username: String!) {
    userByUsername(username: $username) {
      ...UserFragment
    }
  }
  ${UserFragment}
`

export const GET_USER_BY_TOKEN = gql`
  query getUserByToken($token: String!) {
    userByToken(token: $token) {
      ...UserFragment
    }
  }
  ${UserFragment}
`

export const GET_POSTS = gql`
  query getPosts {
    posts {
      location
      title
      postType
      text
    }
  }
`

export const GET_GROUP_BY_NAME = gql`
  query getGroupByName($name: String!) {
    groupByName(name: $name) {
      name
      displayName
      posts {
        location
        text
      }
      members
    }
  }
`

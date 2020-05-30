import { gql } from 'apollo-server-lambda'

export const typeDefs = gql`
  enum PostTypeEnum {
    PUBLICIZING_RESEARCH
    PRE_PEER_REVIEW
    DISCUSSION_TOPIC
    CONFERENCE_AWARENESS
    NONE
  }
`

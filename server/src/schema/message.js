import { gql } from "apollo-server-express";

const messageSchema = gql`
  type Message {
    id: ID!
    text: String!
    userId: ID!
    timestamp: Float
  }

  extend type Query {
    messages(cursor: ID): [Message!]! # 메시지 전체를 받아 올 때는 ID가 필수가 아니기 때문에 느낌표가 없음, getMessages
    message(id: ID!): Message! # getMessage
  }

  extend type Mutation {
    createMessage(text: String!, userId: ID!): Message!
    updateMessage(id: ID!, text: String!, userId: ID!): Message!
    deleteMessage(id: ID!, userId: ID!): ID!
  }
`;

export default messageSchema;

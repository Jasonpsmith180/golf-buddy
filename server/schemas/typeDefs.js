// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        scores: [Score]
        friends: [User]
    }

    type Score {
        _id: ID
        score: Int
        par: Int
        course: String
        username: String
        createdAt: String
        commentCount: Int
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentBody: String
        createdAt: String
        username: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        scores(username: String): [Score]
        score(_id: ID!): Score
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addScore(score: Int!, par: Int!, course: String!): Score
        addComment(scoreId: ID!, commentBody: String!): Score
        addFriend(friendId: ID!): User
    }

    type Auth {
        token: ID!
        user: User
    }
`;

// export the typeDefs
module.exports = typeDefs;
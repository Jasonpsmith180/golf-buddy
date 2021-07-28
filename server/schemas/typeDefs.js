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
        orders: [Order]
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

    type Product {
        _id: ID
        name: String
        description: String
        quantity: Int
        price: Float
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        scores(username: String): [Score]
        score(_id: ID!): Score
        products(name: String): [Product]
        product(_id: ID!): Product
        checkout(products: [ID]!): Checkout
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addScore(score: Int!, par: Int!, course: String!): Score
        addComment(scoreId: ID!, commentBody: String!): Score
        addFriend(friendId: ID!): User
        addOrder(products: [ID]!): Order
        updateProduct(_id: ID!, quantity: Int!): Product
    }

    type Auth {
        token: ID!
        user: User
    }

    type Checkout {
        session: ID
    }
`;

// export the typeDefs
module.exports = typeDefs;
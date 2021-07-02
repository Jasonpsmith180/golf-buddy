import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_FRIEND = gql`
    mutation addFriend($id: ID!) {
        addFriend(friendId: $id) {
            _id
            username
            friendCount
            friends {
                _id
                username
            }
        }
    }
`;

export const ADD_SCORE = gql`
    mutation addScore($score: Int!, $par: Int!, $course: String!) {
        addScore(score: $score, par: $par, course: $course) {
            _id
            score
            par
            course
            createdAt
            username
            commentCount
            comments {
                _id
            }
        }
    }
`;

export const ADD_COMMENT = gql`
    mutation addComment($scoreId: ID!, $commentBody: String!) {
        addComment(scoreId: $scoreId, commentBody: $commentBody) {
            _id
            commentCount
            comments {
                _id
                commentBody
                createdAt
                username
            }
        }
    }
`;

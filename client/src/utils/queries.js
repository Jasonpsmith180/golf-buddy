import { gql } from '@apollo/client';

export const QUERY_SCORES = gql`
    query scores($username: String) {
        scores (username: $username) {
            _id
            username
            score
            par
            course
            createdAt
            commentCount
            comments {
                _id
                createdAt
                username
                commentBody
            }
        }
    }
`;

export const QUERY_SCORE = gql`
    query score($id: ID!) {
        score(_id: $id) {
            _id
            username
            score
            par
            course
            createdAt
            commentCount
            comments {
                createdAt
                username
                commentBody
            }
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            friendCount
            friends {
                _id
                username
            }
            scores {
                _id
                score
                par
                course
                createdAt
                commentCount
            }
        }
    }
`;

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            scores {
                _id
                score
                par
                course
                createdAt
                commentCount
                comments {
                    _id
                    createdAt
                    username
                    commentBody
                }
            }
            friendCount 
            friends {
                _id
                username
            }
        }
    }
`;

export const QUERY_ME_BASIC = gql`
    {
        me {
            _id
            username
            email
            friendCount
            friends {
                _id
                username
            }
        }
    }
`;
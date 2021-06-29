import { gql } from '@apollo/client';

export const QUERY_COMMENTS = gql`
    query comments($username: String) {
        comments(username: $username) {
            _id
            commentText
            createdAt
            username
            replyCount
            replies {
                _id
                createdAt
                username
                replyBody
            }
        }
    }
`;
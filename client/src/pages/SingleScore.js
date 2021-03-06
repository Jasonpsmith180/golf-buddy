import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SCORE } from '../utils/queries';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import Auth from '../utils/auth';

const SingleScore = (props) => {
  const { id: scoreId } = useParams();

  const { loading, data } = useQuery(QUERY_SCORE, {
      variables: { id: scoreId }
  });

  const score = data?.score || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <div className="card mb-3">
            <p className="card-header">
                <span style={{ fontWeight: 700 }} className="text-light">
                    {score.username}
                </span>{' '}
                scored on {score.createdAt}
            </p>
            <div className="card-body">
              <p>{score.score} at {score.course}, par is {score.par}</p>
                <p className="mb-0">
                    Comments: {score.commentCount} || Click to{' '}
                    {score.commentCount ? 'see' : 'start'} the discussion!
                </p>
            </div>
        </div>
        {score.commentCount > 0 && <CommentList comments={score.comments} />}
        {Auth.loggedIn() && <CommentForm scoreId={score._id} />}
    </div>
  );
};

export default SingleScore;

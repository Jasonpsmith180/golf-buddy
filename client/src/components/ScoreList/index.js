import React from 'react';
import { Link } from 'react-router-dom';

const ScoreList = ({ scores, title }) => {
    if (!scores.length) {
        return <h3>No Scores Yet</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {scores &&
                scores.slice(0).reverse().map(score => (
                    <div key={score._id} className="card mb-3">
                    <p className="card-header">
                    <Link
                        to={`/profile/${score.username}`}
                        style={{ fontWeight: 700 }}
                        className="text-dark"
                    >
                        {score.username}
                    </Link>{' '}
                        played on {score.createdAt}
                    </p>
                    <div className="card-body">
                        <Link to={`/score/${score._id}`}>
                            <p>Course: {score.course} <br />
                                Par: {score.par} <br />
                                Score: {score.score}</p>
                            <p className="mb-0">
                                Comments: {score.commentCount} || Click to{' '}
                                {score.commentCount ? 'see' : 'start'} the discussion!
                            </p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ScoreList;
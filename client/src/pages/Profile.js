import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import ScoreList from '../components/ScoreList';
import FriendList from '../components/FriendList';
import Auth from '../utils/auth';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import ScoreForm from '../components/ScoreForm';

const Profile = props => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });

    const user = data?.me || data?.user || {};

    const [addFriend] = useMutation(ADD_FRIEND);

    const handleClick = async () => {
        try {
            await addFriend({
                variables: { id: user._id }
            });
        } catch (e) {
            console.error(e);
        }
    };

    // redirect to personal profile page if username is the logged-in user's
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to="/profile" />;
    }
    
    if(loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this page. Use the navigation links above to sign up or log in!
            </h4>
        );
    }

    return (
        <div>
            <div className="flex-row mb-3">
                <h3 className="bg-dark text-secondary p-3 display-inline-block">
                    Viewing {userParam ? `${user.username}'s` : 'your'} profile.
                </h3>

                {userParam && (
                    <button className="btn ml-auto" onClick={handleClick}>
                        Add Friend
                    </button>
                )}
            </div>

            <div className="flex-row mb-3 justify-space-around bg-light">
                <div className="col-8 col-md-6 mb-3 p-3">
                    {!userParam && (<h3>Submit a score!</h3>)}
                    {!userParam && <ScoreForm />}
                </div>
                <div className="col-4 p-3 mb-3">
                    <FriendList
                        username={user.username}
                        friendCount={user.friendCount}
                        friends={user.friends}
                    />
                </div>
            </div>
            <div className="flex-row col-10 mb-3 justify-center">
                <section className="features-icons bg-light text-center det-ails col-10">
                    <div className="container">
                        <div className="row">
                            <div className="flex-row justify-space-between">
                                <div className="col-12 mb-3">
                                    {loading ? (
                                        <div>Loading...</div>
                                    ) : (
                                        <ScoreList scores={user.scores} title={`${user.username}'s scores...`} />
                                    )}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>  
    );
};

export default Profile;

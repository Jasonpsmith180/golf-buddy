import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SCORES, QUERY_ME_BASIC } from '../utils/queries';
import ScoreList from '../components/ScoreList';
import FriendList from '../components/FriendList';
import ScoreForm from '../components/ScoreForm';
import Slideshow from '../components/Slideshow';
import Auth from '../utils/auth';

const Home = () => {
    
    const { loading, data } = useQuery(QUERY_SCORES);

    const { data: userData } = useQuery(QUERY_ME_BASIC);

    const scores = data?.scores || [];

    const loggedIn = Auth.loggedIn();

    return (
            <main>
                <div className="flex-row justify-center">
                    {!loggedIn && (
                        <Slideshow />
                    )}
                </div>
                <div className="flex-row justify-space-around bg-light">
                    {!loggedIn && (
                        <h4>Login or Signup to submit a score!</h4>
                    )}
                    {loggedIn && (
                        <div className="col-6 mb-3 p-3">
                            <h3>Submit a score!</h3>
                            <ScoreForm />
                        </div>
                    )}
                        {loggedIn && userData ? (
                            <div className="col-12 col-lg-3 mb-3 p-3">
                                <FriendList
                                    username={userData.me.username}
                                    friendCount={userData.me.friendCount}
                                    friends={userData.me.friends}
                                />
                            </div>
                        ) : null}
                </div>
                <div className="flex-row col-10 mb-3 justify-center">
                    <section className="features-icons bg-light text-center det-ails mt-3 col-10">
                        <div className="container">
                            <div className="row">
                                <div className="flex-row justify-space-between">
                                    <div className={`col-12 mb-3 ${loggedIn && 'col-lg-12'}`}>
                                        {loading ? (
                                            <div>Loading...</div>
                                        ) : (
                                            <ScoreList scores={scores} title="New Scores..." />
                                        )}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        )
};

export default Home;
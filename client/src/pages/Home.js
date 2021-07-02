import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SCORES, QUERY_ME_BASIC } from '../utils/queries';
import ScoreList from '../components/ScoreList';
import FriendList from '../components/FriendList';
import ScoreForm from '../components/ScoreForm';
import Auth from '../utils/auth';

const Home = () => {
    // use useQuery hook to make request
    const { loading, data } = useQuery(QUERY_SCORES);

    const { data: userData } = useQuery(QUERY_ME_BASIC);

    const scores = data?.scores || [];
    console.log(scores);

    const loggedIn = Auth.loggedIn();

    return (
            <main>
                <div className="flex-row justify-space-between">
                    {loggedIn && (
                        <div className="col-12 mb-3">
                            <ScoreForm />
                        </div>
                    )}
                    </div>
                    <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}></div>
                <div>
                    <div className="container content">
                        <div className="row">
                            <div className="col-sm-3 talk">
                                <h1>Put In</h1>
                                <h1>Your Handicap</h1>
                                <br />
                                <h6 className="bold-four">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt molestiae ex inventore quibusdam id architecto quos cupiditate nobis magnam eum voluptatem quas quis obcaecati dolor vero veritatis similique alias.
                            </h6>
                                <br />
                                <h6><a className="btn btn-dark start start-two" href="#">Get Started</a></h6>
                            </div>
                            <div className="col-sm-9">
                                <image source={require('../images/golfbuddy.jpg')} />
                            </div>
                        </div>
                    </div>

                    <section className="features-icons bg-light text-center det-ails">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                        <div className="features-icons-icon d-flex  icon-bra-ails">
                                            <i className="icon-screen-desktop m-auto text-primary icon-ails"></i>
                                        </div>
                                        <h5>Lorem Tag</h5>
                                        <p className="lead mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                        <div className="features-icons-icon d-flex  icon-bra-ails">
                                            <i className="icon-layers m-auto text-primary icon-ails"></i>
                                        </div>
                                        <h5>Morem Tag</h5>
                                        <p className="lead mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                        <div className="features-icons-icon d-flex  icon-bra-ails">
                                            <i className="icon-check m-auto text-primary icon-ails"></i>
                                        </div>
                                        <h5>Oorem Tag</h5>
                                        <p className="lead mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="flex-row justify-space-between">
                                <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
                                    {loading ? (
                                        <div>Loading...</div>
                                    ) : (
                                        <ScoreList scores={scores} title="New Scores..." />
                                    )}
                                    </div>
                                    {loggedIn && userData ? (
                                        <div className="col-12 col-lg-3 mb-3">
                                            <FriendList
                                                username={userData.me.username}
                                                friendCount={userData.me.friendCount}
                                                friends={userData.me.friends}
                                            />
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        )
};

export default Home;
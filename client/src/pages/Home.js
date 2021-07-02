import React from 'react';
import pic from '../images/golfbuddy.jpg'
import { useQuery } from '@apollo/client';
const Home = () => {
    // // use useQuery hook to make request
    // const { loading, data } = useQuery(QUERY_COMMENTS);
    // const comments = data?.comments || [];
    // console.log(comments);
    return (
            <main>
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
                                <img src = {pic} />
                            </div>
                        </div>
                    </div>
                    <section class="features-icons bg-light text-center det-ails">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                        <div class="features-icons-icon d-flex  icon-bra-ails">
                                            <i class="icon-screen-desktop m-auto text-primary icon-ails"></i>
                                        </div>
                                        <h5>Lorem Tag</h5>
                                        <p class="lead mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                        <div class="features-icons-icon d-flex  icon-bra-ails">
                                            <i class="icon-layers m-auto text-primary icon-ails"></i>
                                        </div>
                                        <h5>Morem Tag</h5>
                                        <p class="lead mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                        <div class="features-icons-icon d-flex  icon-bra-ails">
                                            <i class="icon-check m-auto text-primary icon-ails"></i>
                                        </div>
                                        <h5>Oorem Tag</h5>
                                        <p class="lead mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
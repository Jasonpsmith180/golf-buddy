import React from "react";
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth'

const Header = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (

        
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
            <Link to="/">
                <h1>⛳ Golf Buddy</h1>
            </Link>
            <nav className="navbar navbar-expand-lg navbar-light bg-light static-top header-a flex-row">
                {Auth.loggedIn() ? (
                    <>
                        <Link to="/profile">Me</Link>
                        <a href="/" onClick={logout}>
                            Logout
                        </a>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                )}
            </nav>
        </div>
    </header>



    //             <div className="collapse navbar-collapse alink" id="navbarSupportedContent">
    //                 <ul className="navbar-nav ml-auto">
    //                     <li className="nav-item dropdown">
    //                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                             Recent scores
                                
    //     </a>
    //                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //                             <a className="dropdown-item" href="#">Action</a>
    //                             <a className="dropdown-item" href="#">Another action</a>
    //                             <div className="dropdown-divider"></div>
    //                             <a className="dropdown-item" href="#">Something else here</a>
    //                         </div>
    //                     </li>

    //                     <li className="nav-item active">
    //                         <a className="nav-link" href="#">Why Us <span className="sr-only">(current)</span></a>
    //                     </li>
    //                     <li className="nav-item">
    //                         <a className="nav-link" href="#">Support</a>
    //                     </li>

                    

    //                 </ul>

    //             </div>


    //         </div>
    //         </nav>
    // </header>

        
    );

}

export default Header;
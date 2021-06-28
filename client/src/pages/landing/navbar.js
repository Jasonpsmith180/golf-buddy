// import React, { useState } from 'react';
// import { Link } from 'react-dom'

//     function navbar() {
//         const [click, setClick] = useState(false);

//         const handleClick = () => setClick(!click);
//         const closeMobileMenu = () => setClick(false);

//         return (
//             <>
//                 <nav className='navbar'>
//                     <div className='navbar-constainer'>
//                         <Link to='/' className='navbar-logo'>
//                             TRVL <i className='navbar-logo' />
//                         </Link>
//                         <div className='menu-icon' onClick={handleClick}>
//                             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//                         </div>
//                         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                             <li classname='nav-item'>
//                                 <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
//                                     Home
//                                 </Link>
//                             </li>
//                             <li classname='nav-item'>
//                                 <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
//                                     Services
//                                 </Link>
//                             </li>
//                             <li classname='nav-item'>
//                                 <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
//                                     Products
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//             </>
//         )
//     }

// export default navbar

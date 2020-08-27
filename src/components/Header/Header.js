import React from 'react';
import './Header.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className="header">
            <h1 >Planet for Learners</h1>

           <div className="d-flex align-items-center justify-content-center nav-bar">
                 <nav>
                    <a href="/categories">Categories</a>
                    <a href="/review">Review</a>
                    <a href="/my">My courses</a>
                    <a href="/account">My account</a>
                </nav>
         </div> 

        </div>
    );
};

export default Header;
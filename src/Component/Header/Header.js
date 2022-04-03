import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Welcome to product review</h2>
            <nav>
                <Link to="/home">Home</Link>
            </nav>
        </div>
    );
};

export default Header;
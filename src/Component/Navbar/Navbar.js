import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className='link-container'>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='./'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='./review'>Review Page</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='./dashboard'>Dashboard</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='./question'>Question</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='./about'>About Us</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
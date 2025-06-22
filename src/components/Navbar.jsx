// Import required modules and libraries
import React from "react";
import {Link} from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import '../styles/navbar.css';

// Navbar component for page navigation
export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                {/* Link to the 'Login' page */}
                <Link to='/login'>Login</Link>
                {/* Link to the 'Shop' page */}
                <Link to='/'>Shop</Link>
                {/* Link to the 'Cart' page */}
                <Link to='/cart'><ShoppingCart size={32}/></Link>
            </div>
        </div>
    );
}
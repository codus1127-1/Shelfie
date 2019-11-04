import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
        return (
            <div className='header'>
                <header >
                    <h2>SHELFIE</h2>
                    <Link to='/'>
                    <h3>Dashboard</h3>
                    </Link>
                    <Link to='/add'>
                    <h3>Add Inventory</h3>
                    </Link>
                </header>
            </div>
        );
    }

export default Header;
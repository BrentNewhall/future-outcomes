import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return( 
            <nav>
                <Link to="/">Home</Link>
                <Link to="/civs">Civilizations</Link>
                <Link to="/help">Help</Link>
            </nav>
        )
    }
}

export default Navbar;
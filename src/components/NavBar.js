import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="nav">
                <Link to={'/graphView'}>Graph View</Link>
                <Link to={'/cardView'}>Card View</Link>
            </div>
        );
      }
}

export default NavBar;

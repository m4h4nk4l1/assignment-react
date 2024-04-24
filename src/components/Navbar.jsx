import './Navbar.css'
import React from 'react';
import {Link} from "react-router-dom";

function Navbar(){
return(
    <nav>
        <ul>
        <li>
            <Link to="/" > Home </Link>
        </li>
        <li>
            <Link to="/employees"> Employees </Link>
        </li>
        <li>Pay Roll</li>
        <li>Log Out</li>
        </ul>
    </nav>
)
}

export default Navbar
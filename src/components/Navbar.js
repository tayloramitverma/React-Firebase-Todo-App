import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper blue">
            <Link to="/" className="brand-logo">Todo</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/Signin">SignIn</Link></li>
                <li><Link to="/Signup">SignUp</Link></li>
                <li><Link to="/todo">Todo</Link></li>
                <li>
                <button className="btn waves-effect waves-light">Logout
                </button>
                </li>
            </ul>
            </div>
        </nav>
    )
}
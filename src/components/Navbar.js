import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../firebase'
import {useHistory} from 'react-router-dom'

export default function Navbar({user}) {

    const history = useHistory()

    return (
        <nav className="blue">
            <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">Todo</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                {user?
                    <>
                        <li>
                            <button 
                                className="btn waves-effect waves-light"
                                onClick={()=>{
                                    auth.signOut()
                                    history.push('/signin')
                                }}
                            >Logout</button>
                        </li>
                    </>
                :
                    <>
                        <li><Link to="/Signin">SignIn</Link></li>
                        <li><Link to="/Signup">SignUp</Link></li>
                    </>
                }
            </ul>
            </div>
        </nav>
    )
}
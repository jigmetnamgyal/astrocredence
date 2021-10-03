import React from 'react'
// import './navBar.css'
import './NavigationBar.css'
import {Link} from 'react-router-dom'
import './buttons/Signup.css'




function NavigationBar() {
    return (
                    <div className="navbar">
            <div className="logo">
            </div>
            <div className="links">
                <Link to="/" id="lnk">Home</Link>
                <Link to="/" id="lnk">Blog</Link>
                <Link to="/ContactUs" id="lnk">Contact</Link>
                <Link to="/" id="lnk">About Us</Link>
                <Link className="btn">
                    Sign Up
                </Link>
                
            </div>


        </div>

    )
}

export default NavigationBar

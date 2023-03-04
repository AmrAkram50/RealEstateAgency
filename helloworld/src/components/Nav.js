import React from "react"
import { NavLink } from "react-router-dom";

const Nav = () => {
    return(
        <div className="navBar">
            <div className="container">
                <a href="a" className="logo">Logo</a>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/About">About</NavLink>
                    <NavLink to="/Blog">Blog</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Nav;
import React from "react"

const Nav = () => {
    return(
        <div className="navBar">
            <div className="container">
                <a href="a" className="logo">Logo</a>
                <ul>
                    <a href="/">Home</a>
                    <a href="/About">About</a>
                </ul>
            </div>
        </div>
    )
}

export default Nav;
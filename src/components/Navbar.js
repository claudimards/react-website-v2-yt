import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo">
                        LAVISH
                    </Link>
                    <div className="menu-icon">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <div id='header'>
            <div id="icon">
                <div id="icon-border">
                    <div id="icon-text">KM</div>
                </div>
            </div>
            <div id="head-links">
                <Link className="link" to={'/'}>
                    Home
                </Link>
                <Link className="link" to={'/about'}>
                    About
                </Link>
                <Link className="link" to={'/portfolio'}>
                    Projects
                </Link>
                <Link className="link" to={'/interests'}>
                    Interests
                </Link>
            </div>
        </div>
    )
}

export default Header
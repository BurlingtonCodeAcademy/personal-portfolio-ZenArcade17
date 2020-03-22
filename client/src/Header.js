import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <div id='header'>
            <div id="icon">
                <div id="icon-text">KM</div>
            </div>
            <div id="head-links">
                <Link className="link" to={'/'}>
                    <div>Home</div>
                </Link>
                <Link className="link" to={'/about'}>
                    <div>About</div>
                </Link>
                <Link className="link" to={'/portfolio'}>
                    <div>Portfolio</div>
                </Link>
                <Link className="link" to={'/interests'}>
                    <div>Interests</div>
                </Link>
            </div>
        </div>
    )
}

export default Header
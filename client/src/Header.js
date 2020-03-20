import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
    return(
        <div>
            <Link to={'/'}>
                <button>Home</button>
            </Link>
            <Link to={'/about'}>
                <button>About</button>
            </Link>
            <Link to={'/portfolio'}>
                <button>Portfolio</button>
            </Link>
            <Link to={'/interests'}>
                <button>Hobbies & Interests</button>
            </Link>
            <a href='https://github.com/BurlingtonCodeAcademy/tic-tac-toe-ZenArcade17' target="_blank" rel="noopener noreferrer">
                <button>External</button>
            </a>
        </div>
    )
}

export default Header
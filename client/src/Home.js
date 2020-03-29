import React from 'react'

function Home(props) {
    return (
        <div id="home">
            <div id="home-head">
                <div id="home-text">Hi, my name is Kevin Murtagh. I am a Full-Stack Web Developer, currently finishing up my training at the <a className="content-links" href="https://burlingtoncodeacademy.com" target="_blank" rel="noopener noreferrer">Burlington Code Academy</a>.</div>
            </div>
            <img src="images/KevAnna.jpg" alt="Kevin and Anna" id="home-pic"></img>
        </div>
    )
}

export default Home
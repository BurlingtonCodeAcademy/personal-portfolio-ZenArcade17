import React from 'react'
import { Link } from 'react-router-dom'

function Home(props) {
    return (
        <div id="home">
            <div id="home-head">
                <div id="home-text">Hi, my name is Kevin Murtagh. I am a Full-Stack Web Developer, and a recent graduate of the <a className="content-links" href="https://burlingtoncodeacademy.com" target="_blank" rel="noopener noreferrer">Burlington Code Academy</a> Software Development Bootcamp!</div>
            </div>
            <img src="images/Head1.JPG" alt="Kevin Headshot" id="home-pic"></img>
            <div id="body-home">
                <p id='about' className='foot-text'>About:</p>
                <p className='about-text'>
                    Over the last few years, I've often thought about how I could make more of a positive impact on those around me. My professional experience includes working with people with developmental disabilities, food service supervising, and customer service. Working and communicating with other people has always been my bread and butter. Working in a field where I am helping others, such as human services, has been extremely rewarding. However, I have always felt like I was meant to make a difference in people's lives on a bigger level. Using the skills and tools I have learned from the Burlington Code Academy, combined with the knowledge and skills I have gained over my professional life, I am ready to take the next step toward making that difference.
                    <br></br>
                    <br></br>
                    The Burlington Code Academy Software Development Bootcamp was one of the most grueling, exciting, fun, often frustrating, yet always rewarding challenges I have ever taken on in my life. My patience and perseverance has never been tested the way that it was during the course. I learned so much about myself and what I am capable of. There were moments during the course where I thought I might collapse from mental and emotional exhaustion. But my will and desire to succeed overcame it. Burlington Code Academy has given me a foundation for a career in tech, from which I can now build upon. To learn more about the projects I completed during the course and the tech I used on them, and to access their respective GitHub respositories, please visit my <Link id='proj-link' to={'/projects'}>Projects</Link> page!
                    <br></br>
                    <br></br>
                </p>
                <div id='photo-text-container'>
                    <p className='about-text'>
                        I live just outside of my hometown, Burlington, Vermont, with my partner and my amazing cat. I am an die-hard fan of ATP/WTA Tennis, NBA Basketball, and sports history. I have also been called a "music nerd", and I do not deny it! Whether it's about music, sports, programming, or anything else, my greatest passion is learning. I am so excited for all the learning opportunities that come with being a software developer. 
                    </p>
                    <img src='images/KevinBuddy.jpg' alt='Kevin and Kitty' id='cat-pic'></img>
                </div>
            </div>
        </div>
    )
}

export default Home
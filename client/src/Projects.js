import React from 'react';
import Modal from "./Modal";
import './styles.css'



class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            projId: null
        }
    }

    projData = [
        {
            key: 1,
            name: "Flyin' Ryan Foundation Core Values",
            description: "My Burlington Code Academy capstone project! The Flyin' Ryan Foundation is a non-profit endeavor inspired by the life of the late professional skier, Ryan Hawks. The Flyin Ryan Hawks Foundation exists to challenge students, athletes and others to independently explore what is important to them and to take ownership of those ideas by composing a set of Core Values to serve as the basis for their daily attitude and decisions.\n\nOur capstone team created a mobile-responsive application that helps the user create, explore, update, and share their core values over time. My primary focus was back-end development, integrating the front-end with the back-end functionality (primarily with user authentication and in the user dashboard), and setting up front end site navigation.",
            tech: "Tech: Firebase, React, Node.js, Express, CSS",
            repoLink: "https://github.com/lukematthewsh/Flyin-Ryan",
            herokuLink: "https://flyinryanchallenge.herokuapp.com"
        },
        {
            key: 2,
            name: "GeoVermonter",
            description: "A Vermont-only version of the GeoGuessr game.",
            tech: "Tech: React, React Leaflet, CSS, Node.js",
            repoLink: "https://github.com/BurlingtonCodeAcademy/guess-the-number-ZenArcade17"
        },
        {
            key: 3,
            name: "BurlingYELP!",
            description: "An online directory of Burlington restaurants, featuring embedded Leaflet maps. Retrieves restaurant info and lat/lon coordinates using Fetch API.",
            tech: "Tech: JavaScript, HTML, CSS, Leaflet, Node.js",
            repoLink: "https://github.com/BurlingtonCodeAcademy/yelpington-ZenArcade17"
        },
        {
            key: 4,
            name: "Remock Website",
            description: "A mock-up of a mock-up!",
            tech: "Tech: JavaScript, HTML, CSS, Node.js",
            repoLink: "https://github.com/BurlingtonCodeAcademy/remock-ZenArcade17"
        },
        {
            key: 5,
            name: "Tic-Tac-Toe",
            description: "The classic game, implemented in a web-based UI. My first web app!",
            tech: "Tech: JavaScript, HTML, CSS, Node.js, Express",
            repoLink: "https://github.com/BurlingtonCodeAcademy/tic-tac-toe-ZenArcade17"
        },
        {
            key: 6,
            name: "Zorkington",
            description: "A version of the classic text-adventure game, Zork, that takes place in the faraway kingdom of Burlington, Vermont!",
            tech: "Tech: JavaScript, Node.js",
            repoLink: "https://github.com/BurlingtonCodeAcademy/zorkington-isadigurski"
        },
        {
            key: 7,
            name: "Guess the Number",
            description: "A game where the user thinks of a number between 1 and 100, and the computer tries to guess it!",
            tech: "Tech: JavaScript, Node.js",
            repoLink: "https://github.com/BurlingtonCodeAcademy/guess-the-number-ZenArcade17"
        }
    ]


    showModal = (event) => {
        this.setState({
            modalOpen: true,
            projId: event.target.id
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    render() {
        return (
            <div id="projects">
                <div className='proj-head'>My Projects</div>
                {this.state.modalOpen === false ? 
                this.projData.map((proj, index) => {return <div key={proj.key} id={index} className="proj-links" onClick={this.showModal}>{proj.name}</div>})  
                : <Modal projId={this.state.projId} close={this.closeModal} projData={this.projData} />}
            </div>

        )
    }

}



export default Projects
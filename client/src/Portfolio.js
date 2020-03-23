import React from 'react';
import Modal from "./Modal";
import './styles.css'



class Portfolio extends React.Component {
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
            name: "Guess the Number",
            description: "A game where the user thinks of a number between 1 and 100, and the computer tries to guess it!",
            repoLink: "https://github.com/BurlingtonCodeAcademy/guess-the-number-ZenArcade17"
        },
        {
            key: 2,
            name: "Zorkington",
            description: "A version of the classic text-adventure game, Zork, that takes place in the faraway kingdom of Burlington, Vermont!",
            repoLink: "https://github.com/BurlingtonCodeAcademy/zorkington-isadigurski"
        },
        {
            key: 3,
            name: "Tic-Tac-Toe",
            description: "The classic game, implemented in a web-based UI. My first web app!",
            repoLink: "https://github.com/BurlingtonCodeAcademy/tic-tac-toe-ZenArcade17"
        },
        {
            key: 4,
            name: "Remock Website",
            images: {
                image1: "/images/Remock1.png",
                image2: "/images/Remock2.png"
            },
            description: "A mock-up of a mock-up!",
            repoLink: "https://github.com/BurlingtonCodeAcademy/remock-ZenArcade17"
        },
        {
            key: 5,
            name: "BurlingYELP!",
            description: "An online directory of Burlington restaurants, featuring embedded Leaflet maps. Retrieves restaurant info and lat/lon coordinates using the fetch() method.",
            repoLink: "https://github.com/BurlingtonCodeAcademy/yelpington-ZenArcade17"
        },
        {
            key: 6,
            name: "GeoVermonter",
            description: "A Vermont-only version of the " + <a href="https://geoguessr.com" target="_blank" rel="noopener noreferrer">GeoGuessr</a> + " game.",
            repoLink: "https://github.com/BurlingtonCodeAcademy/geo-vermonter-Kevin-and-Rob"
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
                {this.state.modalOpen === false ? 
                this.projData.map((proj, index) => {return <div key={proj.key} id={index} className="proj-links" onClick={this.showModal}>{proj.name}</div>})  
                : <Modal projId={this.state.projId} close={this.closeModal} projData={this.projData} />}
            </div>

        )
    }

}



export default Portfolio
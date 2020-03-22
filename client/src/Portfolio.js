import React from 'react';
import Modal from "./Modal";
import './styles.css'



class Portfolio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false
        }
    }

    projData = [
        {
            name: "Guess the Number",
            description: "A game where the user thinks of a number between 1 and 100, and the computer tries to guess it!",
            repoLink: "https://github.com/BurlingtonCodeAcademy/guess-the-number-ZenArcade17"
        },
        {
            name: "Zorkington",
            description: "A version of the classic text-adventure game, Zork, that takes place in the faraway kingdom of Burlington, Vermont!",
            repoLink: "https://github.com/BurlingtonCodeAcademy/zorkington-isadigurski"
        },
        {
            name: "Tic-Tac-Toe",
            description: "The classic game, implemented in a web-based UI. My first web app!",
            repoLink: "https://github.com/BurlingtonCodeAcademy/tic-tac-toe-ZenArcade17"
        },
        {
            name: "Remock Website Test",
            images: {
                image1: "/images/Remock1.png",
                image2: "/images/Remock2.png"
            },
            description: "A mock-up of a mock-up!",
            repoLink: "https://github.com/BurlingtonCodeAcademy/remock-ZenArcade17"
        },
        {
            name: "BurlingYELP!",
            description: "An online directory of Burlington restaurants, featuring embedded Leaflet maps. Retrieves restaurant info and lat/lon coordinates using the fetch() method.",
            repoLink: "https://github.com/BurlingtonCodeAcademy/yelpington-ZenArcade17"
        },
        {
            name: "GeoVermonter",
            description: "A Vermont-only version of the " + <a href="https://geoguessr.com" target="_blank" rel="noopener noreferrer">GeoGuessr</a> + " game.",
            repoLink: "https://github.com/BurlingtonCodeAcademy/geo-vermonter-Kevin-and-Rob"
        }
    ]


    showModal = () => {
        this.setState({
            modalOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    render() {
        return (
            <div>
                {this.state.modalOpen === false ? <div className="proj-links" onClick={this.showModal}>{this.projData.name}</div> : <Modal close={this.closeModal} projData={this.projData} />}
            </div>

        )
    }

}



export default Portfolio
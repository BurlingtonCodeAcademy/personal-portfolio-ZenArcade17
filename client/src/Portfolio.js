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
                {this.state.modalOpen === false ? null : <Modal close={this.closeModal} />}

                {!this.state.modalOpen ? <div onClick={this.showModal}>Remock Website</div> : null}
            </div>

        )
    }

}



export default Portfolio
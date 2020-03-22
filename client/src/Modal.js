import React from "react";
import './styles.css';

class Modal extends React.Component {
    render() {

        return (
            <div id="modal">

                <h1>Hello Modal</h1>
                <button id='closeButton' onClick={this.props.close}>Close</button>

            </div>
        )
    }
}

export default Modal
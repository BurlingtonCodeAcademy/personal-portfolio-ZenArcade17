import React from "react";
import './styles.css';

class Modal extends React.Component {
    render() {

        return (
            <div id="modal">
                <div id="modal-content">
                    <h1>Hello Modal</h1>
                    <button className="close" onClick={this.props.close}>Close</button>
                </div>
            </div>
        )
    }
}

export default Modal
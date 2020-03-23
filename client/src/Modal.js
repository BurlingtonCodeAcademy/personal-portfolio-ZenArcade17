import React from "react";
import './styles.css';

class Modal extends React.Component {
    render() {

        return (
            <div id="modal">
                <div id="modal-content">
                    <div id="modal-header">
                        <span id="x-close" onClick={this.props.close}>&times;</span>
                        <h1>{this.props.projData[parseInt(this.props.projId)].name}</h1>
                    </div>
                    <div id="modal-body">
                        <p>{this.props.projData[parseInt(this.props.projId)].description}</p>
                    </div>
                         <a href={this.props.projData[parseInt(this.props.projId)].repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    <div id="modal-footer">
                        <button className="close" onClick={this.props.close}>Back to Projects</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
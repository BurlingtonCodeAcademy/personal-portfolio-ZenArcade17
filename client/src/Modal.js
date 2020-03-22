import React from "react";
import './styles.css';

class Modal extends React.Component {
    render() {

        return (
            <div id="modal">
                <div id="modal-content">
                    <div id="modal-header">
                        <span id="x-close" onClick={this.props.close}>&times;</span>
                        <h1>{this.props.projData.name}</h1>
                    </div>
                    <div id="modal-body">
                        <p>{this.props.projData.description}</p>
                        <div id="screenshots">
                            <img className="screenshots" src={this.props.projData.images.image1} alt="Remock Screenshot 1"></img>
                            <img className="screenshots" src={this.props.projData.images.image2} alt="Remock Screenshot 2"></img>
                        </div>
                         <a href={this.props.projData.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    </div>
                    <div id="modal-footer">
                        <button className="close" onClick={this.props.close}>Back to Projects</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
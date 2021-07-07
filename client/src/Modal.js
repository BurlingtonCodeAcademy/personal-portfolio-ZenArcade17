import React from "react";
import './styles.css';

class Modal extends React.Component {
    render() {

        return (
            <div id="modal">
                <div id="modal-content">
                    <div id="modal-header">
                        
                        <h1>{this.props.projData[parseInt(this.props.projId)].name}</h1>
                    </div>
                    <div id="modal-body">
                        <p className='proj-des'>{this.props.projData[parseInt(this.props.projId)].description}</p>
                        <br></br>
                        <p className='proj-des'>{this.props.projData[parseInt(this.props.projId)].tech}</p>
                    </div>
                    {this.props.projData[parseInt(this.props.projId)].herokuLink ? <a className='mod-links' href={this.props.projData[parseInt(this.props.projId)].herokuLink} target="_blank" rel="noopener noreferrer">Visit App!</a> : null}
                    <a className='mod-links' href={this.props.projData[parseInt(this.props.projId)].repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    <div id="modal-footer">
                        <button className="close" onClick={this.props.close}>Back to Projects</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
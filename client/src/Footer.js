import React from 'react'


class Footer extends React.Component {
    render() {
        return (
            <div>
                <div id="footer">
                    <div className='foot-text'>Interested in working together?</div>
                    <a className='email-button content-links' href="mailto:kmurtaghvt@gmail.com">Email Me! <span>&#8594;</span> </a>
                    <a className='email-button content-links' href="https://www.linkedin.com/in/kevinmurtaghvt/" target="_blank" rel="noopener noreferrer">LinkedIn <span>&#8594;</span> </a>
                </div>
                <div id='copyright'>Copyright Kevin Murtagh 2020</div>
            </div>
        )
    }
}

export default Footer
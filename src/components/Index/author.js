import React, { Component } from 'react';

const characterImgStyle = {
    maxHeight: '300px',
    width: 'auto',
}

class Author extends Component {
    render() {
        return (
            <div className="author-section">
                <img style={characterImgStyle}
                className="character-img" 
                src={this.props.data.image} 
                alt={this.props.data.character}/>
                <h2 id="quote-author">{this.props.data.character}</h2>
            </div>
        )
    }
}

export default Author;
import React, { Component } from 'react';

class Author extends Component {
    render() {
        return (
            <div className="author-section">
                <img src={this.props.data.image} alt={this.props.data.character}/>
                <h2 id="quote-author">{this.props.data.character}</h2>
            </div>
        )
    }
}

export default Author;
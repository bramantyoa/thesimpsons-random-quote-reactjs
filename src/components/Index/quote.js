import React, { Component } from 'react';

class Quote extends Component {
    render() {
        return (
            <h1 id="quote-text"><span id="tick">"</span> {this.props.data.quote} <span id="tick">"</span></h1>
        )
    }
}

export default Quote;
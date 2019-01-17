import React, { Component } from 'react';

class ButtonGroup extends Component {
    render() {
        return (
            <div className="misc-buttons">
                <p className="fetch-new" onClick={this.props.onClick}>
                    get me another one!
                </p>
            </div>
        );
    }
}

export default ButtonGroup;
import React, { Component } from 'react';
import axios from 'axios';
import Quote from '../../components/Index/quote';
import Author from '../../components/Index/author';
import Footer from '../../components/Index/footer';

class ScreensIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quoteFetched: false,
            APIresponse: {},
        }
    }

    componentDidMount() {
        axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes`)
            .then(response => {
                const APIresponse = response.data[0];
                this.setState({ quoteFetched: true, APIresponse: APIresponse });
            });
    }

    render() {
        if (this.state.quoteFetched) {
            return (
                <div className="quote-container">
                    <div className="quote-main">
                    <div className="quote-section">
                        <Quote data={this.state.APIresponse} />
                        
                        <Author data={this.state.APIresponse} />
                        </div>
                    </div>
                    <Footer />
                </div>
            );
        } else {
            return (
                <div className="quote-container">
                    <p className="loading">Loading...</p>
                    <Footer />
                </div>
            )
        }
    }
}

export default ScreensIndex;
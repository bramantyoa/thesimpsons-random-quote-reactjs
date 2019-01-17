import React, { Component } from 'react';
import axios from 'axios';
import Quote from '../../components/Index/quote';
import Author from '../../components/Index/author';
import Footer from '../../components/Index/footer';
import ButtonGroup from '../../components/Index/button-group';

class ScreensIndex extends Component {
    constructor(props) {
        super(props);

        this.fetchNewQuote = this.fetchNewQuote.bind(this);
        this.handleFetchNew = this.handleFetchNew.bind(this);

        this.state = {
            quoteFetched: false,
            APIresponse: {},
        }
    }

    componentDidMount() {
        // var offlineData = {
        //     "quote": "Why are you pleople avoiding me? Does my withered face remind you of the grim specter of death?",
        //     "character": "Abe Simpson",
        //     "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593",
        //     "characterDirection": "Right"
        // }
        // this.setState({ quoteFetched: true, APIresponse: offlineData });

        this.fetchNewQuote();
    }

    fetchNewQuote() {
        // var offlineData = {
        //     "quote": "Shut up, brain. I got friends now. I don't need you anymore.",
        //     "character": "Lisa Simpson",
        //     "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
        //     "characterDirection": "Right"
        // }
        // this.setState({ quoteFetched: true, APIresponse: offlineData });

        axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes`)
            .then(response => {
                const APIresponse = response.data[0];
                this.setState({ quoteFetched: true, APIresponse: APIresponse });
            });
    }

    handleFetchNew() {
        this.setState({ quoteFetched: false });
        this.fetchNewQuote();
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
                    <ButtonGroup onClick={this.handleFetchNew} />
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
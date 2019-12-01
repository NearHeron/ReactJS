import React, { Component } from 'react';
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorButton from "../error-button";

import './app.css';
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../PeoplePage/people-page";

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        hasError: false,
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet,
            }
        })
    };

    componentDidCatch() {
        this.setState({
            hasError: true,
        })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        return (
            <div>
                <Header />
                { planet }

                <button className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>
                <ErrorButton />
                <PeoplePage />

            </div>
        );
    }


};

import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots'
import SeacrhBox from './SearchBox';

class App extends Component {
    render() {
        return (
            <div className="tc">
                <h1>Robo Friends</h1>
                <SeacrhBox />
                <CardList robots={robots} />
            </div>
        )
    }
}

export default App;
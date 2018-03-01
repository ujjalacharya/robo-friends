import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots'
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    handleSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
      
    }

    render() {
        const filterdRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.handleSearchChange} />
                <CardList robots={filterdRobots} />
            </div>
        )
    }
}

export default App;
import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots'
import SearchBox from './SearchBox';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    handleSearchChange(event){
        console.log(event.target.value)
    }

    render() {
        return (
            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.handleSearchChange}/>
                <CardList robots={this.state.robots} />
            </div>
        )
    }
}

export default App;
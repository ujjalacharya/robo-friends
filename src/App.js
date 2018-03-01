import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users =>this.setState({robots: users}))
    }

    handleSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
      
    }

    render() {
        const filterdRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length === 0){return <h1>Loading</h1>}
        return (
            <div className="tc">
                <h1 className="f1">Robo Friends</h1>
                <SearchBox searchChange={this.handleSearchChange} />
                <CardList robots={filterdRobots} />
            </div>
        )
    }
}

export default App;
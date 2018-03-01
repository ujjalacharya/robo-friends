import React, { Component } from 'react';
import Card from './Card';

class ClassList extends Component {
    render() {
        const {robots} = this.props;
        const cardlist = robots.map((robot, i)=>{
           return <Card name={robots[i].name}
            email={robots[i].email}
            id={robots[i].id} />
        })
        return (
            <div>
               {cardlist}
            </div>
        )
    }
}

export default ClassList;
import React, { Component } from 'react';
import Card from './Card';

class ClassList extends Component {
    render() {
        const { robots } = this.props;
        return (
            <div>
                {
                    robots.map((robot, i) => {
                        return (
                            <Card key={i}
                                name={robots[i].name}
                                email={robots[i].email}
                                id={robots[i].id} />
                        )
                    })
                }
            </div>
        )
    }
}

export default ClassList;
import React, {Component} from 'react';

class Card extends Component{
    render(){
        const {name, email, id} = this.props;
        return(
            <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 tc">
                <img src={`https://robohash.org/${id}`}
                alt="robots"/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        )
    }
}

export default Card;
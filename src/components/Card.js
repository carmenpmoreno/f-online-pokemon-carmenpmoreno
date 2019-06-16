import React from 'react';
import './Card.scss';

class Card extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <div className="card">
                <img src={item.sprites.front_default}></img>
                <h3 className="itemUpperCasse">{`id/${item.id}`}</h3>
                <h2 className="pokemonName">{item.name}</h2>
                <ul>
                    {item.types.map(type => {
                        return (
                            <li className="itemList itemUpperCasse" key={type.slot}>{type.type.name}</li>
                        );
                    }
                    )}
                </ul>
            </div>
        );
    }
}

export default Card;
import React from 'react';
import './Card.scss';

class Card extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <div className="card">
                <img className="pokemonImage" src={item.sprites.front_default} alt={item.name}></img>
                <h3 className="itemUpperCasse pokemonId">{`id/${item.id}`}</h3>
                <div className="nameTypesWrapper">
                    <h2 className="pokemonName">{item.name}</h2>
                    <ul className="pokemonTypes">
                        {item.types.map(type => {
                            return (
                                <li className="itemUpperCasse pokemonType" key={type.slot}>{type.type.name}</li>
                            );
                        }
                        )}
                    </ul>
                </div>

            </div>
        );
    }
}

export default Card;
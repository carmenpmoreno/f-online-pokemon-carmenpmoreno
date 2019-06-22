import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {
    render() {
        const { name, image, id, types, specie } = this.props;
        return (
            <div className="card">
                <img className="pokemonImage" src={image} alt={name}></img>
                <h3 className="itemUpperCasse pokemonId">{`id/${id}`}</h3>
                <div className="nameTypesWrapper">
                    <h2 className="pokemonName">{name}</h2>
                    <ul className="pokemonTypes">
                        {types.map(type => {
                            return (
                                <li className="itemUpperCasse pokemonType" key={type.slot}>{type.type.name}</li>
                            );
                        }
                        )}
                    </ul>
                </div>
                <div>
                    {!specie.pokemonSpecie.evolves_from_species
                        ? (console.log('este pokemon no tiene evolución'))
                        : (<p>{specie.pokemonSpecie.evolves_from_species.name}</p>)
                    }
                </div>


            </div>
        );
    }
}

Card.propTypes = {
    item: PropTypes.object,
}

export default Card;
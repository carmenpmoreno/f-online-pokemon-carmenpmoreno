import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {
    render() {
        const { item, specie } = this.props;
        console.log(specie);
        // const evolution = item.speciesData.evolves_from_species;
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
                <div>
                    {/* {evolution === undefined
                        ? (console.log('este pokemon no tiene evolución'))
                        : (<p>{item.speciesData.evolves_from_species.name}</p>)
                    } */}
                </div>


            </div>
        );
    }
}

Card.propTypes = {
    item: PropTypes.object,
}

export default Card;
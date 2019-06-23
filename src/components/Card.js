import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {


    render() {
        const { name, image, id, types, specie } = this.props;
        // console.log(specie);
        return (
            <div className="card">
                <div className="card-up">
                    <img className="pokemonImage" src={image} alt={name}></img>
                    <h3 className="itemUpperCasse pokemonId">{`id/${id}`}</h3>
                </div>
                <div className="card-down">
                    <h2 className="pokemonName">{name}</h2>
                    <ul className="pokemonTypes">
                        {types.map(type => {
                            return (
                                <li className="itemUpperCasse pokemonType" key={type.slot}>{type.type.name}</li>
                            );
                        }
                        )}
                    </ul>
                    <div>
                        {!specie || specie.pokemonSpecie.evolves_from_species === null
                            ? (console.log('este pokemon no tiene evolucion o no hay datos de especie'))
                            : (<p className="evolution">{`Evoluciona de: ${specie.pokemonSpecie.evolves_from_species.name}`}</p>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    item: PropTypes.object,
}

export default Card;
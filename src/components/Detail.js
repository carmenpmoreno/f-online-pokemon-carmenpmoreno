import React from 'react';
import PropTypes from 'prop-types';
import './Detail.scss';

class Detail extends React.Component {
    render() {
        const { data } = this.props;
        const { pokemonId } = this.props.match.params;
        const item = data[pokemonId - 1];
        const { name, height, weight, abilities, } = item;
        const image = item.sprites.front_default;
        console.log(name);

        return (
            <main>
                <h1>{name}</h1>
                <h2>Perfil</h2>
                <ul className="profileList">
                    <li className="profileList__item">{`altura: ${height}`}</li>
                    <li className="profileList__item">{`peso: ${weight}`}</li>
                    <li className="profileList__item">
                        Habilidades
                        <ul className="profileList__abilitiesList">
                            {abilities.map(item => {
                                return (<li>{item.ability.name}</li>);
                            })}
                        </ul>
                    </li>
                    <li className="profileList__item">
                        <ul>
                            <li>
                                <img className="pokemonImage" src={image} alt={name}></img>
                            </li>
                        </ul>
                    </li>
                </ul>
            </main>
        );
    }
}

Detail.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.object.isRequired,
}

export default Detail;
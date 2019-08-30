import React from 'react';
import PropTypes from 'prop-types';
import './Detail.scss';
// import fetchEvolution from '../services/fetchEvolution';
import { Link } from 'react-router-dom';

class Detail extends React.Component {
  render() {
    const { data } = this.props;
    const { pokemonId } = this.props.match.params;
    const item = data[pokemonId - 1];
    const { name, height, weight, abilities, id } = item;
    const image = item.sprites.front_default;
    const frstEvolName = item.species_data.evolution_data.chain.species.name;
    const scndEvolName =
      item.species_data.evolution_data.chain.evolves_to[0].species.name;
    const thrdEvolName =
      item.species_data.evolution_data.chain.evolves_to[0].evolves_to[0].species
        .name;

    return (
      <div className="detailContainer">
        <header>
          <nav className="navContainer">
            <button className="backButton">
              <Link className="backButton__link" to="/">
                volver
              </Link>
            </button>
          </nav>
        </header>
        <main className="mainCard">
          <h1 className="mainCard__title">{name}</h1>
          <h2 className="mainCard__profileTitle">Perfil</h2>
          <ul className="profileList">
            <li className="profileList__item">{`altura: ${height}`}</li>
            <li className="profileList__item">{`peso: ${weight}`}</li>
            <li className="profileList__item">
              Habilidades:
              <ul className="profileList__abilitiesList">
                {abilities.map(item => {
                  return (
                    <li
                      className="abilitiesList__item"
                      key={item.slot}
                    >{`${item.ability.name},`}</li>
                  );
                })}
              </ul>
            </li>
            <li className="profileList__images">
              <ul className="imagesList">
                <li className="imagesList__item">
                  <img
                    className="profileList__pokemonImage"
                    src={image}
                    alt={name}
                  ></img>
                </li>
                <ul className="evolutionsNames">
                  {!item.species_data ||
                  item.species_data.pokemonSpecie.evolves_from_species ===
                    null ? (
                    <li className="profileList__item"></li>
                  ) : (
                    <li className="profileList__item">
                      {' '}
                      {`Evoluciona de ${item.species_data.pokemonSpecie.evolves_from_species.name}`}
                    </li>
                  )}
                  {frstEvolName === name ? (
                    <li className="profileList__item">
                      {' '}
                      {`Evoluciona a ${scndEvolName}`}
                    </li>
                  ) : (
                    ' '
                  )}
                  {scndEvolName === name ? (
                    <li className="profileList__item">
                      {' '}
                      {`Evoluciona a ${thrdEvolName}`}
                    </li>
                  ) : (
                    ' '
                  )}
                </ul>
              </ul>
            </li>
          </ul>
        </main>
      </div>
    );
  }
}

Detail.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.object.isRequired,
};

export default Detail;

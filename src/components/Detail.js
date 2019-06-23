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

        return (
            <div className="detailContainer">
                <header>
                    <nav className="navContainer">
                        <button className="backButton"><Link className="backButton__link" to="/">volver</Link></button>
                    </nav>
                </header>
                <main className="mainCard">
                    <h1 className="mainCard__title">{name}</h1>
                    <h2 className="mainCard__profileTitle">Perfil</h2>
                    <ul className="profileList">
                        <li className="profileList__item">{`altura: ${height}`}</li>
                        <li className="profileList__item">{`peso: ${weight}`}</li>
                        <li className="profileList__item">
                            Habilidades
                        <ul className="profileList__abilitiesList">
                                {abilities.map(item => {
                                    return (<li className="abilitiesList__item" key={item.slot}>{`${item.ability.name},`}</li>);
                                })}
                            </ul>
                        </li>
                        <li className="profileList__item">
                            <ul className="imagesList">
                                <li className="imagesList__item">
                                    <img className="pokemonImage" src={image} alt={name}></img>
                                </li>
                                {/* <li>
                                    {/* {fetchEvolution(id)
                                ?(console.log('tenemos fetchEvolution'))
                                :(console.log('NO tenemos fetchEvolution'))
                                } */}
                                {/* </li> */} 
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
}

export default Detail;
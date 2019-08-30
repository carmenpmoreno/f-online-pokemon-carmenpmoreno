import React from 'react';
import Card from './Card';
import './List.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class List extends React.Component {
  render() {
    const { data, inputValue } = this.props;
    return (
      <ul className="pokemonList">
        {inputValue.length >= 3 || inputValue === '' ? (
          data
            .sort(function(a, b) {
              if (a.id > b.id) {
                return 1;
              }
              if (a.id < b.id) {
                return -1;
              } else {
                return 0;
              }
            })
            .filter(item => {
              const inputValueLowerCase = inputValue.toLowerCase();
              return item.name.includes(inputValueLowerCase);
            })
            .map(item => {
              return (
                <li className="itemList" key={item.id} id={item.id}>
                  <Link
                    className="itemList__link"
                    to={`/pokemon-detail/${item.id}`}
                  >
                    <Card
                      name={item.name}
                      image={item.sprites.front_default}
                      id={item.id}
                      types={item.types}
                      specie={item.species_data}
                    />
                  </Link>
                </li>
              );
            })
        ) : (
          <p className="chooseParagraph">¡Sigue buscando!</p>
        )}
      </ul>
    );
  }
}

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  inputValue: PropTypes.string,
  specie: PropTypes.objectOf(PropTypes.object),
};

export default List;

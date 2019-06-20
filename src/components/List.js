import React from 'react';
import Card from './Card';
import './List.scss';
import PropTypes from 'prop-types';

class List extends React.Component {

    render() {
        const { data, inputValue } = this.props;
        return (
            <ul className="pokemonList">
                {inputValue.length >= 3 || inputValue === ""
                    ? (data
                        .filter(item => {
                            const inputValueLowerCase = inputValue.toLowerCase();
                            return (
                                item.name.includes(inputValueLowerCase)
                            );
                        }
                        )
                        .map(item => {
                            return (
                                <li className="itemList" key={item.id}>
                                    <Card
                                        item={item}
                                    />
                                </li>
                            );
                        }))
                    : (<p className="chooseParagraph">¡Sigue buscando!</p>)

                }
            </ul>
        );
    }
}

List.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    inputValue: PropTypes.string,
}

export default List;
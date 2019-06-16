import React from 'react';
import Card from './Card';
import './List.scss';

class List extends React.Component {

    render() {
        const { data, inputValue, fetchOk } = this.props;
        return (
            <ul>
                {inputValue.length >= 3 & fetchOk
                    ? (data
                        .filter(item => {
                            return (
                                item.name.includes(inputValue)
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
                    : (<p>¡Elige tu pokemon favorito!</p>)

                }
            </ul>
        );
    }
}

export default List;
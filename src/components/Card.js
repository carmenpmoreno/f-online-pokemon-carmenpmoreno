import React from 'react';
import './Card.scss';

class Card extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <div className="card">
                <img src={item.sprites.front_default}></img>
                <h3>{`id/${item.id}`}</h3>
                <h2>{item.name}</h2>
                <ul>
                    {item.types.map(type => {
                        return (
                            <li className="itemList">{type.type.name}</li>
                        );
                    }
                    )}
                </ul>
            </div>
        );
    }
}

export default Card;
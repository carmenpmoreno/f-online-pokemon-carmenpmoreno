import React from 'react';
import './Card.scss';

class Card extends React.Component {
    render() {
        const { data } = this.props;
        console.log(data);
        return (
            <div className="card">
                <p>{data.name}</p>
            </div>
        );
    }
}

export default Card;
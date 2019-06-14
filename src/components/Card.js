import React from 'react';
import './Card.scss';

class Card extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data);
        return(
            <div className="card">
                {data.map((item) => <div className="card"><p>{item.name}</p></div>)}
            </div>
        );
    }
}

export default Card;
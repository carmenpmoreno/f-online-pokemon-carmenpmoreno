import React from 'react';
import Card from './Card';
import './List.scss';

class List extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <ul>
                {data
                    .map(item => {
                        return (
                            <li className="itemList" key={item.id + 1}>
                                <Card
                                    item={item}
                                />
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default List;
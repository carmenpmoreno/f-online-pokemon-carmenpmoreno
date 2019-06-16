import React from 'react';
import Card from './Card';
import './List.scss';

class List extends React.Component {
    render() {
        const { data, inputValue } = this.props;
        return (
            <ul>
                {data
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
                    })
                }
            </ul>
        );
    }
}

export default List;
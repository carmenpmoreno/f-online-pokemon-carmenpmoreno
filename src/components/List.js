import React from 'react';
import Card from './Card';

class List extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <section>
                <Card
                    data={data}
                />
            </section>
        );
    }
}

export default List;
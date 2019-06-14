import React from 'react';
import Filter from './Filter';
import List from './List';

class Home extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <main>
                <Filter />
                <List 
                    data={data}
                />
            </main>

        );
    }
}

export default Home;
import React from 'react';
import Filter from './Filter';
import List from './List';

class Home extends React.Component {
    render() {
        return (
            <main>
                <Filter />
                <List />
            </main>

        );
    }
}

export default Home;
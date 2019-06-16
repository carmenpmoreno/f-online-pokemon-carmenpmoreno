import React from 'react';
import Filter from './Filter';
import List from './List';

class Home extends React.Component {
    render() {
        const { data, onInputChange, inputValue } = this.props;
        return (
            <main>
                <Filter
                    onInputChange={onInputChange}
                    inputValue={inputValue}
                />
                <List
                    data={data}
                    inputValue={inputValue}
                />
            </main>

        );
    }
}

export default Home;
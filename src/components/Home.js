import React from 'react';
import Filter from './Filter';
import List from './List';
import './Home.scss';

class Home extends React.Component {
    render() {
        const { data, onInputChange, inputValue, fetchOk} = this.props;
        return (
            <main className="homePage">
                <Filter
                    onInputChange={onInputChange}
                    inputValue={inputValue}
                />
                <List
                    data={data}
                    inputValue={inputValue}
                    fetchOk={fetchOk}
                />
            </main>

        );
    }
}

export default Home;
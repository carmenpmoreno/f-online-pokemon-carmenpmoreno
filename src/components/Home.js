import React from 'react';
import Filter from './Filter';
import List from './List';
import './Home.scss';
import PropTypes from 'prop-types';

class Home extends React.Component {
    render() {
        const { data, onInputChange, inputValue } = this.props;

        return (
            <main className="homePage">
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
Home.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    onInputChange: PropTypes.func,
    inputValue: PropTypes.string,
    fetchOk: PropTypes.bool,
    evolutionData: PropTypes.arrayOf(PropTypes.object),
}

export default Home;
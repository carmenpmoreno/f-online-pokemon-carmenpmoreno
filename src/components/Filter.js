import React from 'react';
import './Filter.scss';

class Filter extends React.Component {
    render() {
        const {onInputChange, inputValue} = this.props;
        return (
            <fieldset>
                <label className="labelFilter">Filtro por nombre</label>
                <input
                    type="text"
                    placeholder="Busca tu pokemon favorito por nombre"
                    onChange={onInputChange}
                    value={inputValue}
                />
            </fieldset>

        );
    }
}

export default Filter;
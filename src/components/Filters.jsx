import React, { useContext, useState } from 'react';
import FiltersContext from '../context/FiltersContext';

function Filters() {
  const FOUR = 4;
  const {
    searchInput, setSearchInput,
    selectInput, setSelectInput,
    filterList, setFilterList,
  } = useContext(FiltersContext);

  const [onGoingFilter, setOnGoingFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const comparisonList = [
    'maior que',
    'menor que',
    'igual a',
  ];

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setOnGoingFilter({
      ...onGoingFilter,
      [name]: value });
  };

  const handleAddFilter = () => {
    setSelectInput([...selectInput, onGoingFilter]);
    const newList = filterList
      .filter((el) => el !== onGoingFilter.column);
    setFilterList(newList);
    setOnGoingFilter({
      column: newList[0],
      comparison: 'maior que',
      value: '',
    });
    if (selectInput.length === FOUR) {
      setFilterList([]);
    }
  };

  const handleDelete = (column) => {
    const newselectInput = selectInput.filter((el) => el.column !== column);
    setSelectInput(newselectInput);
    setFilterList([...filterList, column]);
  };

  return (
    <div>
      <input
        type="text"
        name="searchInput"
        data-testid="name-filter"
        value={ searchInput }
        placeholder="Procurar pelo nome"
        onChange={ (e) => setSearchInput(e.target.value) }
      />
      <select
        name="column"
        data-testid="column-filter"
        value={ onGoingFilter.column }
        onChange={ handleChange }
      >
        {
          filterList && filterList.map((filter, index) => (
            <option key={ index } value={ filter }>{filter}</option>
          ))
        }
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        value={ onGoingFilter.comparison }
        onChange={ handleChange }
      >
        {
          comparisonList && comparisonList.map((element, index) => (
            <option key={ index } value={ element }>{element}</option>
          ))
        }
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        value={ onGoingFilter.value }
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleAddFilter }
      >
        Filtrar
      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => setSelectInput([]) }
      >
        Remover filtros
      </button>
      <br />
      <div>
        {
          selectInput && selectInput.map((filter, index) => (
            <div key={ index } data-testid="filter">
              <span>
                {filter.column}
                {filter.comparison}
                {filter.value}
              </span>
              <button
                type="button"
                data-testid="remove-filter-btn"
                onClick={ () => handleDelete(filter.column) }
              >
                Remover
              </button>
            </div>
          ))
        }
      </div>
      <hr />
    </div>
  );
}

export default Filters;

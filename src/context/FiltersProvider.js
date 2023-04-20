import PropTypes from 'prop-types';
import { useState } from 'react';
import FiltersContext from './FiltersContext';

function FiltersProvider({ children }) {
  const [searchInput, setSearchInput] = useState('');
  const [selectInput, setSelectInput] = useState([]);
  const [filterList, setFilterList] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const values = {
    searchInput,
    setSearchInput,
    selectInput,
    setSelectInput,
    filterList,
    setFilterList,
  };

  return (
    <FiltersContext.Provider value={ values }>
      { children }
    </FiltersContext.Provider>
  );
}

FiltersProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FiltersProvider;

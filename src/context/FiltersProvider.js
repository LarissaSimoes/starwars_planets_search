import PropTypes from 'prop-types';
import { useState } from 'react';
import FiltersContext from './FiltersContext';

function FiltersProvider({ children }) {
  const [searchInput, setSearchInput] = useState('');
  const [selectInput, setSelectInput] = useState('');
  const [sortInput, setSortInput] = useState('');

  const value = {
    searchInput,
    setSearchInput,
    selectInput,
    setSelectInput,
    sortInput,
    setSortInput,
  };

  return (
    <FiltersContext.Provider value={ value }>
      {children}
    </FiltersContext.Provider>
  );
}

FiltersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FiltersProvider;

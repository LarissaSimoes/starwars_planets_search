import React, { useContext } from 'react';
import FiltersContext from '../context/FiltersContext';
// import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { searchInput, setSearchInput } = useContext(FiltersContext);

  return (
    <form>
      <fieldset>
        <label>
          <input
            data-testid="name-filter"
            label="Type your search"
            type="text"
            name="searchInput"
            value={ searchInput }
            onChange={ (e) => setSearchInput(e.target.value) }
          />
        </label>
      </fieldset>
    </form>
  );
}

export default Filters;

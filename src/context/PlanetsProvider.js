import PropTypes from 'prop-types';
import { useContext, useEffect, useMemo, useState } from 'react';
import useFetch from '../hooks/useFetch';
import FiltersContext from './FiltersContext';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData, fetchData] = useFetch([]);
  const [filteredData, setFilteredData] = useState([]);
  const { selectInput } = useContext(FiltersContext);

  useEffect(() => {
    fetchData('https://swapi.dev/api/planets');
  }, []);

  useEffect(() => {
    let planets = data;
    selectInput.forEach((filter) => {
      const { column, comparison, value } = filter;
      switch (comparison) {
      case 'maior que':
        planets = (planets.filter((planet) => Number(planet[column]) > Number(value)));
        break;
      case 'menor que':
        planets = (planets.filter((planet) => Number(planet[column]) < Number(value)));
        break;
      case 'igual a':
        planets = (planets.filter((planet) => Number(planet[column]) === Number(value)));
        break;
      default:
        planets.push(data);
      }
    });
    setFilteredData(planets);
  }, [data, selectInput]);

  const values = useMemo(() => ({
    data,
    setData,
    filteredData,
    setFilteredData,
  }), [data, filteredData]);

  return (
    <PlanetsContext.Provider value={ values }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;

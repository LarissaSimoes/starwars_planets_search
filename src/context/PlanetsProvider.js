import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [planets, setPlanets] = useState([]);
  const [errors, setErrors] = useState(null);

  const fetchPlanets = async () => {
    try {
      setIsLoading(true);
      const data = await fetch('https://swapi.dev/api/planets');

      if (!data.ok) {
        const newError = await data.json();
        throw newError.message;
      }

      const json = await data.json();
      const planetResults = json.results.forEach((planet) => {
        delete planet.residents;
      });
      setPlanets(planetResults);
    } catch (e) {
      setErrors(e);
      throw new Error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const values = useMemo(() => ({
    isLoading,
    errors,
    planets,
    fetchPlanets,
  }), [isLoading, errors, planets]);

  return (
    <PlanetsContext.Provider value={ values }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetProvider;

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

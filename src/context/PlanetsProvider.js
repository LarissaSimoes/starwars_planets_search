import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  // const [isLoading, setIsLoading] = useState(false);
  const [planets, setPlanets] = useState([]);
  // const [errors, setErrors] = useState(null);

  const fetchPlanets = async () => {
    const data = await fetch('https://swapi.dev/api/planets');
    const json = await data.json();
    const planetResults = json.results.map((planet) => {
      const newPlanets = { ...planet };
      delete newPlanets.residents;
      return newPlanets;
    });
    setPlanets(planetResults);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const values = useMemo(() => ({
    planets,
  }), [planets]);

  return (
    <PlanetsContext.Provider value={ values }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

import { useCallback, useState } from 'react';

function useFetch() {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    const planetResults = json.results.map((planet) => {
      const newPlanets = { ...planet };
      delete newPlanets.residents;
      return newPlanets;
    });
    setData(planetResults);
  }, []);

  return [data, setData, fetchData];
}

export default useFetch;

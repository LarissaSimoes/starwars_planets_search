import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import PlanetsProvider from '../context/PlanetsProvider';
import FiltersProvider from '../context/FiltersProvider';

describe('Testando aplicação Star Wars', () => {
  jest.setTimeout(70000);
  it('Testando se elementos estão presentes na página', () => {
    render(    
    <FiltersProvider>
      <PlanetsProvider>
        <App />
      </PlanetsProvider>
    </FiltersProvider>,);

    const firstInput = screen.getByPlaceholderText('Procurar pelo nome');
    expect(firstInput).toBeInTheDocument();
    const firstSelect = screen.getByTestId(/column-filter/i);
    expect(firstSelect).toBeInTheDocument();

  })
})

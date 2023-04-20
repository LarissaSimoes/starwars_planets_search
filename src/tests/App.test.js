import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import PlanetsProvider from '../context/PlanetsProvider';
import FiltersProvider from '../context/FiltersProvider';

describe('Testando aplicação Star Wars', () => {
  // jest.setTimeout(10000);
  
  it('Testando se elementos estão presentes na página', async () => {
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
    const comparisonFilter = screen.getByTestId(/comparison-filter/i);
    expect(comparisonFilter).toBeInTheDocument();
    const valueFilter = screen.getByTestId(/value-filter/i);
    expect(valueFilter).toBeInTheDocument();
    const buttonFilter = screen.getByTestId(/button-filter/i);
    expect(buttonFilter).toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText('Procurar pelo nome'), 'oo');
    const tatooine = await screen.findByText(/tatooine/i);
    expect(tatooine).toBeInTheDocument();
  })
})

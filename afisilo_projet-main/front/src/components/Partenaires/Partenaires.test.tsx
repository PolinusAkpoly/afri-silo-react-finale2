import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Partenaires from './Partenaires';

describe('<Partenaires />', () => {
  test('it should mount', () => {
    render(<Partenaires />);
    
    const partenaires = screen.getByTestId('Partenaires');

    expect(partenaires).toBeInTheDocument();
  });
});
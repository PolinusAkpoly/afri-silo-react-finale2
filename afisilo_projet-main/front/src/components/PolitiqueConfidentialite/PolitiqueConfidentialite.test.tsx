import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PolitiqueConfidentialite from './PolitiqueConfidentialite';

describe('<PolitiqueConfidentialite />', () => {
  test('it should mount', () => {
    render(<PolitiqueConfidentialite />);
    
    const politiqueConfidentialite = screen.getByTestId('PolitiqueConfidentialite');

    expect(politiqueConfidentialite).toBeInTheDocument();
  });
});
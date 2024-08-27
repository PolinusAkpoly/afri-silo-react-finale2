import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Assurance from './Assurance';

describe('<Assurance />', () => {
  test('it should mount', () => {
    render(<Assurance />);
    
    const assurance = screen.getByTestId('Assurance');

    expect(assurance).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CGV from './CGV';

describe('<CGV />', () => {
  test('it should mount', () => {
    render(<CGV />);
    
    const cgv = screen.getByTestId('CGV');

    expect(cgv).toBeInTheDocument();
  });
});
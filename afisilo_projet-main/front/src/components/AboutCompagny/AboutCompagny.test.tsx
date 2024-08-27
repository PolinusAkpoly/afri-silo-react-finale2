import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutCompagny from './AboutCompagny';

describe('<AboutCompagny />', () => {
  test('it should mount', () => {
    render(<AboutCompagny />);
    
    const aboutCompagny = screen.getByTestId('AboutCompagny');

    expect(aboutCompagny).toBeInTheDocument();
  });
});
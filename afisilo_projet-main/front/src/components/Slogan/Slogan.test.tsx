import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Slogan from './Slogan';

describe('<Slogan />', () => {
  test('it should mount', () => {
    render(<Slogan />);
    
    const slogan = screen.getByTestId('Slogan');

    expect(slogan).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Error404 from './Error404';

describe('<Error404 />', () => {
  test('it should mount', () => {
    render(<Error404 />);
    
    const error404 = screen.getByTestId('Error404');

    expect(error404).toBeInTheDocument();
  });
});
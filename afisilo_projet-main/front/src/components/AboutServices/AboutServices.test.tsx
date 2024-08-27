import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutServices from './AboutServices';

describe('<AboutServices />', () => {
  test('it should mount', () => {
    render(<AboutServices />);
    
    const aboutServices = screen.getByTestId('AboutServices');

    expect(aboutServices).toBeInTheDocument();
  });
});
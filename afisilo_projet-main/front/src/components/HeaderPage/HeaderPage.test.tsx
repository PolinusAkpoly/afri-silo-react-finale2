import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderPage from './HeaderPage';

describe('<HeaderPage />', () => {
  test('it should mount', () => {
    render(<HeaderPage name="" />);
    
    const headerPage = screen.getByTestId('HeaderPage');

    expect(headerPage).toBeInTheDocument();
  });
});
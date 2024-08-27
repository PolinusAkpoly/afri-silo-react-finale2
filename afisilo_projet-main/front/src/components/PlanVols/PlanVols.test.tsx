import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlanVols from './PlanVols';

describe('<PlanVols />', () => {
  test('it should mount', () => {
    render(<PlanVols />);
    
    const planVols = screen.getByTestId('PlanVols');

    expect(planVols).toBeInTheDocument();
  });
});
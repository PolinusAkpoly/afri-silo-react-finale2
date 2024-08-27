import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MentionsLégales from './MentionsLégales';

describe('<MentionsLégales />', () => {
  test('it should mount', () => {
    render(<MentionsLégales />);
    
    const mentionsLegales = screen.getByTestId('MentionsLégales');

    expect(mentionsLegales).toBeInTheDocument();
  });
});
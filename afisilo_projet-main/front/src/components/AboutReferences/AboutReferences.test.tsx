//Generate with new-react-cli : Sat, 16 Jul 2022 18:05:20 GMT
//Free training on https://mudey.fr

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutReferences from './AboutReferences';

describe('<AboutReferences />', () => {
  test('it should mount', () => {
    render(<AboutReferences />);
    
    const aboutReferences = screen.getByTestId('AboutReferences');

    expect(aboutReferences).toBeInTheDocument();
  });
});






















































//Generate with new-react-cli : Sat, 16 Jul 2022 18:05:20 GMT
//Free training on sur https://mudey.fr
//Teacher Profile : https://mudey.fr/user/espero-akpoli
//Teacher Email : eakpoli@mudey.fr
//Teacher WhatsApp : +33 7 77 67 41 57

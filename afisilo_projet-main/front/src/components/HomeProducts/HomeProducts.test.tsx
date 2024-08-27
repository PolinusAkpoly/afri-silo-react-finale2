//Generate with new-react-cli : Sat, 16 Jul 2022 15:40:32 GMT
//Free training on https://mudey.fr

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeProducts from './HomeProducts';

describe('<HomeProducts />', () => {
  test('it should mount', () => {
    render(<HomeProducts />);
    
    const homeProducts = screen.getByTestId('HomeProducts');

    expect(homeProducts).toBeInTheDocument();
  });
});






















































//Generate with new-react-cli : Sat, 16 Jul 2022 15:40:32 GMT
//Free training on sur https://mudey.fr
//Teacher Profile : https://mudey.fr/user/espero-akpoli
//Teacher Email : eakpoli@mudey.fr
//Teacher WhatsApp : +33 7 77 67 41 57

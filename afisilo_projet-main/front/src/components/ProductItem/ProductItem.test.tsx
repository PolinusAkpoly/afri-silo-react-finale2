//Generate with new-react-cli : Sat, 16 Jul 2022 16:12:57 GMT
//Free training on https://mudey.fr

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductItem from './ProductItem';

describe('<ProductItem />', () => {
  test('it should mount', () => {
    render(<ProductItem product />);
    
    const productItem = screen.getByTestId('ProductItem');

    expect(productItem).toBeInTheDocument();
  });
});






















































//Generate with new-react-cli : Sat, 16 Jul 2022 16:12:57 GMT
//Free training on sur https://mudey.fr
//Teacher Profile : https://mudey.fr/user/espero-akpoli
//Teacher Email : eakpoli@mudey.fr
//Teacher WhatsApp : +33 7 77 67 41 57

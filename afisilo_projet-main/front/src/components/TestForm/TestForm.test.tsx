//Generate with new-react-cli : Sun, 03 Jul 2022 13:44:28 GMT
//Free training on https://mudey.fr

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestForm from './TestForm';

describe('<TestForm />', () => {
  test('it should mount', () => {
    render(<TestForm />);
    
    const testForm = screen.getByTestId('TestForm');

    expect(testForm).toBeInTheDocument();
  });
});






















































//Generate with new-react-cli : Sun, 03 Jul 2022 13:44:28 GMT
//Free training on sur https://mudey.fr
//Teacher Profile : https://mudey.fr/user/espero-akpoli
//Teacher Email : eakpoli@mudey.fr
//Teacher WhatsApp : +33 7 77 67 41 57

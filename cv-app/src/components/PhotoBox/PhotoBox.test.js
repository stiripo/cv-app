import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { PhotoBox } from './PhotoBox';
import { storeWrapper } from '../../utils/tests';

test('renders the Navigation component', () => {
    render(storeWrapper(<PhotoBox />));
    const photo = screen.getByAltText("developer");
    expect(photo).toBeInTheDocument();
});

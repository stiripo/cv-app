import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { Navigation } from './Navigation';
import { storeWrapper } from '../../utils/tests';

test('renders the Navigation component', () => {
    render(storeWrapper(<Navigation />));
    const aboutMe = screen.getByText(/about me/i);
    expect(aboutMe).toBeInTheDocument();
});

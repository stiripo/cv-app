import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { Panel } from './Panel';
import { storeWrapper } from '../../utils/tests';
import { BrowserRouter } from 'react-router-dom';

test('renders the Navigation component', () => {
    render(
        <BrowserRouter>
            {storeWrapper(<Panel  backToRoute='/' />)}
        </BrowserRouter>
    );
    const button = screen.getByRole('button', { name: /go back/i });
    expect(button).toBeInTheDocument();
});

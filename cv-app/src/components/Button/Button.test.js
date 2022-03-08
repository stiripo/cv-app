import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { Button } from './Button';
import { storeWrapper } from '../../utils/tests'

test('renders the Button component', () => {
    render(storeWrapper(<Button text='Learn more' />));
    const button = screen.getByRole('button', { name: /learn/i });
    expect(button).toBeInTheDocument();
});

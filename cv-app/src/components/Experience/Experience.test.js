import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { Experience } from './Experience';
import { experience_data } from '../../utils/constants';
import { storeWrapper } from '../../utils/tests';

test('renders the Experience component', () => {
    render(storeWrapper(<Experience data={experience_data} />));
    const experience = screen.getByTestId('experience_list');
    expect(experience).toBeInTheDocument();
});

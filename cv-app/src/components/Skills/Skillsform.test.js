import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { storeWrapper } from '../../utils/tests';
import { SkillsWrapper } from './SkillsForm'

test('renders the SkillsWrapper component', () => {
    render(storeWrapper(<SkillsWrapper />));
    expect(screen.getByRole('button', { name: /open edit/i })).toBeInTheDocument();
})

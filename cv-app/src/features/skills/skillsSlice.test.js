import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { addSkill, skillReducer, updateStatefromStorage } from './skillsSlice';

describe('skillsReducer', () => {
    test('should add a skill to state', () => {
        expect(skillReducer([], addSkill({
            name: 'CSS',
            range: 60,
        }))).toEqual([{
            name: 'CSS',
            range: 60,
        }])
    }
    );

    test('should add a skill from local storage', () => {
        expect(skillReducer([], updateStatefromStorage({
            name: 'HTML',
            range: 80,
        }))).toEqual({
            name: 'HTML',
            range: 80,
        })
    }
    );
})


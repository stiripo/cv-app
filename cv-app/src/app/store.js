import { educationReducer } from '../features/education/educationSlice';
import { skillReducer } from '../features/skills/skillsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        education: educationReducer,
        skills: skillReducer,
    },
})
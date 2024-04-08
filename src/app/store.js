import { educationReducer } from '../features/education/educationSlice';
import { skillReducer, skillsMiddleware } from '../features/skills/skillsSlice';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        education: educationReducer,
        skills: skillReducer,
    },
     middleware: [skillsMiddleware, thunk],
})

store.dispatch({type: 'APP_INIT'})
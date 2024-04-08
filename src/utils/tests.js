import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import { educationReducer } from '../features/education/educationSlice';
import { skillReducer } from '../features/skills/skillsSlice';

export const store = configureStore({
    reducer: {
        education: educationReducer,
        skills: skillReducer,
    }
})

export function storeWrapper(children) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
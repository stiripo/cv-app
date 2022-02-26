import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

const skillSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        addSkill(state, action) {
            state.push(action.payload);
        }
    },
});

export const postSkillsData = createAsyncThunk('skills/sendSkills', async (payload) => {
    return await fetch('/api/skills', {
        method: 'POST',
        body: payload,
    }).then((response) => response.json());
});

export const skillsMiddleware = storeAPI => next => action => {
    console.log(action.type);
    if (action.type === 'skills/sendSkills/fulfilled') {
        console.log('middleware working');

        const currentState = storeAPI.getState();
        const stateToPersist = currentState.skills;

        const serializedState = JSON.stringify(stateToPersist);
        const key = stateToPersist[0].name;
        const value = stateToPersist[0].range;
        localStorage.setItem(key, value);

        // const serializedKey = JSON.stringify(key);
        // const serializedValue = JSON.stringify(value);
        // localStorage.setItem(serializedKey, serializedValue);
    }
    return next(action)
}

export const { addSkill } = skillSlice.actions;
export const skillReducer = skillSlice.reducer;


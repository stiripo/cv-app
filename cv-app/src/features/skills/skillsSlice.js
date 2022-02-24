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

export const postSkillsData = createAsyncThunk('education/fetchStatus', async (payload) => {
    return await fetch('/api/skills', {
        method: 'POST',
        body: payload,
    }).then((response) => response.json());
});

export const { addSkill } = skillSlice.actions;
export const skillReducer = skillSlice.reducer;


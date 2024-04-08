import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

const skillSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        addSkill(state, action) {
            state.push(action.payload);
        },
        updateStatefromStorage(state, action) {
            return action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchSkillsData.fulfilled, (state, action) => {
                return action.payload;
            })
    }
});

export const { updateStatefromStorage } = skillSlice.actions;

export const postSkillsData = createAsyncThunk('skills/sendSkills', async (payload) => {
    return await fetch('/api/skills', {
        method: 'POST',
        body: payload,
    }).then((response) => response.json());
});

export const fetchSkillsData = createAsyncThunk('skills/fetchStatus', async () => {
    return await fetch('/api/skills')
    .then((response) => response.json())
})

export const skillsMiddleware = storeAPI => next => action => {
    const result = next(action);

    if (action.type === 'APP_INIT') {
        const dispatch = storeAPI.dispatch;
        const storageData = localStorage.getItem("cachedSkills");

        if (storageData === null) {
            console.log('nothing in local storage');
            dispatch(fetchSkillsData());
        } else {
            const parsedData = JSON.parse(storageData);
            dispatch(updateStatefromStorage(parsedData));
        }
    }

    if (action.type === 'skills/sendSkills/fulfilled') {
        const currentState = storeAPI.getState();
        const stateToPersist = currentState.skills;
        const serializedState = JSON.stringify(stateToPersist);
        localStorage.setItem("cachedSkills", serializedState);
    }
    return result;
}

export const { addSkill } = skillSlice.actions;
export const skillReducer = skillSlice.reducer;


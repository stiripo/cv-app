import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    education: [],
    status: null,
    errorMessage: null,
}

export const fetchEducationData = createAsyncThunk('education/fetchStatus', async () => {
    return await fetch('/api/educations').then((response) => response.json());
})

const educationSlice = createSlice({
    name: 'education',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchEducationData.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchEducationData.fulfilled, (state, action) => {

                state.education = action.payload;
                state.status = 'idle'
            })
            .addCase(fetchEducationData.rejected, (state, action) => {
                state.errorMessage = 'Something went wrong; please review your server connection!';
                state.status = 'failed';
            })
    }
})
export const educationReducer = educationSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [], // Initial state for the user list
    loading: true,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        addUser: (state, action) => {
            state.users.push(...action.payload);
        }
    },
});

export const selectUsers = (state) => state.user.users;

export const { addUser, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;

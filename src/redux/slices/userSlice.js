import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null
};

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
});

// Selectors
export const getUser = (state) => state.userReducer.user;

// Reducers and actions
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeButtonId: 1,
};

const buttonToggle = createSlice({
  name: 'buttonToggle',
  initialState,
  reducers: {
    toggleButton: (state, action) => {
      state.activeButtonId = action.payload;
    },
  },
});

export const { toggleButton } = buttonToggle.actions;
export default buttonToggle.reducer;

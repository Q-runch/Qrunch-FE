import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UrlState {
  url: string;
}

const initialState: UrlState = {
  url: '',
};

const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
  },
});

export const { setUrl } = urlSlice.actions;
export default urlSlice.reducer;

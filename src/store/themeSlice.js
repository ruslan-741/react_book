import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  themeName: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeName(state, { payload }) {
      state.themeName = payload;
    },
  },
});

export const selectThemeName = (state) => state.theme.themeName;
export const { setThemeName } = themeSlice.actions;

export default themeSlice.reducer;

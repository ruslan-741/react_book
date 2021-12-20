import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  inputValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setIsOpen(state, { payload }) {
      state.isOpen = payload;
    },
    setInputValue(state, { payload }) {
      state.inputValue = payload;
    },
  },
});

export const selectIsSearchOpen = (state) => state.search.isOpen;
export const selectInputValue = (state) => state.search.inputValue;

export const { setInputValue, setIsOpen } = searchSlice.actions;

export default searchSlice.reducer;

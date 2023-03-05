import { createSlice } from '@reduxjs/toolkit';

const initialState = { filter: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterKeyword(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilterKeyword } = filterSlice.actions;

const filterReducer = filterSlice.reducer;
export default filterReducer;

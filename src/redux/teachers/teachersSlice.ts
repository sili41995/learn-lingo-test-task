import { createSlice } from '@reduxjs/toolkit';
import initialState from '@/redux/initialState';
import { ITeachersState } from '@/types/types';

const teachersState: ITeachersState = initialState.teachers;

const teachersSlice = createSlice({
  name: 'teachers',
  initialState: teachersState,
  reducers: {
    toggleFavList: (state, { payload }) => ({
      ...state,
      favorites: state.favorites.some(({ id }) => id === payload.id)
        ? state.favorites.filter(({ id }) => id !== payload.id)
        : [payload, ...state.favorites],
    }),
  },
});

export const { toggleFavList } = teachersSlice.actions;

export default teachersSlice.reducer;

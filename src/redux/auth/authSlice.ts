import { createSlice } from '@reduxjs/toolkit';
import initialState from '@/redux/initialState';
import { IAuthState } from '@/types/types';

const authState: IAuthState = initialState.auth;

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    setUser: (state, { payload }) => ({
      ...state,
      user: { name: payload.name, email: payload.email },
      isLoggedIn: true,
    }),
    logOut: () => ({ ...initialState.auth }),
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

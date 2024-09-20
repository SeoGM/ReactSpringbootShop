import { jwtDecode } from 'jwt-decode';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DecodedToken {
  sub: string;
  role: string;
}

const initialState = {
  token: null as string | null,
  username: null as string | null,
  isLoggedIn: false,
  role: null as string | null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ token: string; username: string; role: string }>,
    ) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.isLoggedIn = true;
      state.role = action.payload.role;

      localStorage.setItem('jwtToken', action.payload.token);
    },
    logout: (state) => {
      state.token = null;
      state.username = null;
      state.isLoggedIn = false;
      state.role = null;

      localStorage.removeItem('jwtToken');
    },
    setToken: (
      state,
      action: PayloadAction<{ token: string }>,
    ) => {
      const decoded: DecodedToken = jwtDecode<DecodedToken>(action.payload.token);

      console.log('Decoded token in setToken:', decoded);

      state.token = action.payload.token;
      state.username = decoded.sub;
      state.role = decoded.role;
      state.isLoggedIn = !!action.payload.token;

      localStorage.setItem('jwtToken', action.payload.token);
    },
  },
});

export const { login, logout, setToken } = userSlice.actions;
export default userSlice.reducer;

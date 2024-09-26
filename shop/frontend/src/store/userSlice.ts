import { jwtDecode } from 'jwt-decode';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DecodedToken {
  sub: string;
  role: string;
  exp: number;
}

const initialState = {
  token: null as string | null,
  email: null as string | null,
  isLoggedIn: false,
  role: null as string | null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ token: string; email: string; role: string }>,
    ) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.isLoggedIn = true;
      state.role = action.payload.role;

      localStorage.setItem('jwtToken', action.payload.token);
    },
    logout: (state) => {
      state.token = null;
      state.email = null;
      state.isLoggedIn = false;
      state.role = null;

      localStorage.removeItem('jwtToken');
    },
    setToken: (state, action: PayloadAction<{ token: string }>) => {
      const decoded: DecodedToken = jwtDecode<DecodedToken>(
        action.payload.token,
      );

      console.log('Decoded token in setToken:', decoded);

      state.token = action.payload.token;
      state.email = decoded.sub;
      state.role = decoded.role;
      state.isLoggedIn = !!action.payload.token;

      localStorage.setItem('jwtToken', action.payload.token);
    },
    checkTokenExpiration: (state) => {
      if (!state.token) {
        return;
      }

      const decoded: DecodedToken = jwtDecode<DecodedToken>(state.token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        state.token = null;
        state.email = null;
        state.isLoggedIn = false;
        state.role = null;

        localStorage.removeItem('jwtToken');
        console.log('토큰이 만료되었습니다. 로그아웃 처리되었습니다.');
      }
    },
  },
});

export const { login, logout, setToken, checkTokenExpiration } =
  userSlice.actions;
export default userSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  token: string | null;
  username: string | null;
  isLoggedIn: boolean;
  role: string | null; // 사용자 역할 추가
}

const initialState: UserState = {
  token: null,
  username: null,
  isLoggedIn: false,
  role: null, // 초기 역할 값
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ token: string; username: string; role: string }>, // 역할도 추가
    ) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.isLoggedIn = true;
      state.role = action.payload.role; // 역할 저장
    },
    logout: (state) => {
      state.token = null;
      state.username = null;
      state.isLoggedIn = false;
      state.role = null; // 로그아웃 시 역할 초기화
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

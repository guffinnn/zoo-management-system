import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isLoggedIn: boolean;
  user: {
    uid: string;
    email: string;
    is_admin: boolean;
  } | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  user: JSON.parse(localStorage.getItem('user') || 'null'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(
      state,
      action: PayloadAction<{
        uid: string;
        email: string;
        is_admin: boolean;
      } | null>,
    ) {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const { setUser, logOut } = userSlice.actions;

export default userSlice.reducer;

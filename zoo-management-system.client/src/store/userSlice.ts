import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isLoggedIn: boolean;
  user: {
    email: string;
  } | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ email: string } | null>) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { setUser, logOut } = userSlice.actions;

export default userSlice.reducer;

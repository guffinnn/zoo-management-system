import { createSlice } from '@reduxjs/toolkit';

interface MenuState {
  isOpen: boolean;
  isClosing: boolean;
}

const initialState: MenuState = {
  isOpen: false,
  isClosing: true,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openMenu(state) {
      state.isOpen = true;
      state.isClosing = false;
    },
    closeMenu(state) {
      state.isClosing = true;
    },
    finishClosing(state) {
      state.isOpen = false;
      state.isClosing = false;
    },
  },
});

export const { openMenu, closeMenu, finishClosing } = menuSlice.actions;
export default menuSlice.reducer;

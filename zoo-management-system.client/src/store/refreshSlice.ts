import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RefreshState {
  refreshID: string;
}

const initialState: RefreshState = {
  refreshID: '',
};

const refreshSlice = createSlice({
  name: 'refresh',
  initialState,
  reducers: {
    refreshData: (state, action: PayloadAction<string>) => {
      state.refreshID = action.payload;
    },
  },
});

export const { refreshData } = refreshSlice.actions;

export default refreshSlice.reducer;

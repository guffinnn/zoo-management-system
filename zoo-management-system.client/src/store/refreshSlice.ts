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
      console.log('Refreshing data with payload:', action.payload);
      state.refreshID = action.payload;
    },
  },
});

export const { refreshData } = refreshSlice.actions;

export default refreshSlice.reducer;

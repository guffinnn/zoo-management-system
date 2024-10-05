import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '@store/menuSlice.ts';
import notificationReducer from '@store/notificationSlice.ts';
import refreshReducer from '@store/refreshSlice.ts';
import userReducer from '@store/userSlice.ts';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    user: userReducer,
    notifications: notificationReducer,
    refresh: refreshReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

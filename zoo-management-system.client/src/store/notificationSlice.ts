import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Notification {
  id?: number;
  type: 'database' | 'error';
  message: string;
}

interface NotificationState {
  notifications: Notification[];
}

const initialState: NotificationState = {
  notifications: [],
};

let nextNotificationId = 0;

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      const notification = action.payload;

      state.notifications.push({
        id: nextNotificationId++,
        type: notification.type,
        message: notification.message,
      });
    },
    removeNotification: (state, action: PayloadAction<number>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload,
      );
    },
  },
});

export const { addNotification, removeNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;

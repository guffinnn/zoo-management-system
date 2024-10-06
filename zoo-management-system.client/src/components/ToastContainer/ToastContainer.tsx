import Toast from '@components/ToastContainer/Toast/Toast.tsx';
import { Notification } from '@store/notificationSlice.ts';
import { RootState } from '@store/store.ts';
import { JSX } from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function StyledToastContainer(): JSX.Element {
  const notifications = useSelector(
    (state: RootState) => state.notifications.notifications,
  );
  const notificationsByDB = notifications.filter(
    (item) => item.type === 'database',
  );

  return (
    <ToastContainer className="p-4" position="bottom-end">
      {notificationsByDB.map((notification: Notification) => (
        <>
          <Toast key={notification.id} notification={notification} />
        </>
      ))}
    </ToastContainer>
  );
}

export default StyledToastContainer;

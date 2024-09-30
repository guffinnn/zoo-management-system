import {
  StyledToast,
  StyledToastBody,
  StyledToastHeader,
} from '@components/ToastContainer/styled.ts';
import { DEFAULT_DELAY } from '@constants/values.ts';
import { Notification, removeNotification } from '@store/notificationSlice.ts';
import { JSX, useState } from 'react';
import { useDispatch } from 'react-redux';

interface ToastProps {
  notification: Notification;
}

function Toast({ notification }: ToastProps): JSX.Element {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  const handleClose = (id: number) => {
    setShow(!show);
    dispatch(removeNotification(id));
  };

  return (
    <StyledToast
      key={notification.id}
      show={show}
      delay={DEFAULT_DELAY}
      autohide
      onClose={() => handleClose(notification.id)}
    >
      <StyledToastHeader>
        <strong className="me-auto">База данных</strong>
        <small className="text-muted">сейчас</small>
      </StyledToastHeader>
      <StyledToastBody>{notification.message}</StyledToastBody>
    </StyledToast>
  );
}

export default Toast;

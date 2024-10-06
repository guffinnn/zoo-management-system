import {
  StyledToast,
  StyledToastBody,
  StyledToastHeader,
} from '@components/ToastContainer/styled.ts';
import { DEFAULT_DELAY } from '@constants/values.ts';
import useAnimationWithDelay from '@hooks/useAnimationWithDelay.ts';
import { Notification, removeNotification } from '@store/notificationSlice.ts';
import { JSX } from 'react';
import { useDispatch } from 'react-redux';

interface ToastProps {
  notification: Notification;
}

function Toast({ notification }: ToastProps): JSX.Element {
  const [show, setShow] = useAnimationWithDelay({
    showInitial: true,
    delay: DEFAULT_DELAY,
  });
  const dispatch = useDispatch();

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
      onClose={() => handleClose(notification.id!)}
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

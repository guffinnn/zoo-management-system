import info from '@assets/info.svg';
import {
  Image,
  StyledAlert,
  StyledHeading,
  Text,
} from '@components/Alert/styled.ts';
import { DEFAULT_DELAY } from '@constants/values.ts';
import useAnimationWithDelay from '@hooks/useAnimationWithDelay.ts';
import { removeNotification } from '@store/notificationSlice.ts';
import { RootState } from '@store/store.ts';
import { JSX, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Alert(): JSX.Element | null {
  const notifications = useSelector(
    (state: RootState) => state.notifications.notifications,
  );
  const [error] = notifications.filter((x) => x.type === 'error');
  const dispatch = useDispatch();

  const onHide = () => {
    if (error) {
      dispatch(removeNotification(error.id!));
    }
  };

  const [show, setShow] = useAnimationWithDelay({
    showInitial: false,
    delay: DEFAULT_DELAY,
    onHide: onHide,
  });

  useEffect(() => {
    if (error && error.message.length > 0) {
      setShow(true);
    }
  }, [error]);

  return error && error.message.length > 0 ? (
    <StyledAlert className="m-1" variant="secondary" show={show}>
      <Image src={info} alt="" />
      <div className="container">
        <StyledHeading>Что-то пошло не так :(</StyledHeading>
        <Text>{error.message}</Text>
      </div>
    </StyledAlert>
  ) : null;
}

export default Alert;

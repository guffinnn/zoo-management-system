import error from '@assets/error.svg';
import success from '@assets/success.svg';
import { PATH } from '@constants/paths.ts';
import { logOut } from '@pages/Modal/modals/AuthModal/AuthModal.tsx';
import {
  NotifyFrame,
  NotifyText,
} from '@pages/Modal/modals/AuthModal/styled.ts';
import {
  Button,
  ButtonContainer,
  InfoContent,
  ModalContainer,
  ModalContent,
  StatusHeading,
  StatusImage,
  StatusImageContainer,
  StatusInfo,
} from '@pages/Modal/modals/StatusModal/styled.ts';
import { RootState } from '@store/store.ts';
import { logOut as logOutFromRedux } from '@store/userSlice.ts';
import { JSX } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function StatusModal(): JSX.Element {
  const user = useSelector((state: RootState) => state.user.user);
  const isAuthenticated = user !== null;

  const navigate = useNavigate();
  const handleClick = () => navigate(PATH.TO_HOME);

  const dispatch = useDispatch();
  const handleExitClick = () => {
    dispatch(logOutFromRedux());
    logOut();
  };

  return (
    <ModalContainer>
      <InfoContent>
        <StatusImageContainer
          className={!isAuthenticated ? 'error' : 'success'}
        >
          <StatusImage src={!isAuthenticated ? error : success} />
        </StatusImageContainer>
        <ModalContent>
          <StatusHeading>
            {!isAuthenticated ? 'Вход не выполнен' : 'Вход выполнен'}
          </StatusHeading>
          <StatusInfo>
            {!isAuthenticated
              ? 'Пользователя с такими данными не существует'
              : 'Доступ к приложению открыт'}
          </StatusInfo>
        </ModalContent>
        <ButtonContainer>
          <Button onClick={handleClick}>Закрыть</Button>
        </ButtonContainer>
      </InfoContent>
      {isAuthenticated && (
        <NotifyFrame>
          <NotifyText className="exit" onClick={handleExitClick}>
            <span>Выйти из аккаунта</span>
          </NotifyText>
        </NotifyFrame>
      )}
    </ModalContainer>
  );
}

export default StatusModal;

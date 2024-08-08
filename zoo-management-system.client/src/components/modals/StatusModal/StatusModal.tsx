import error from '@assets/error.svg';
import success from '@assets/success.svg';
import {
  Button,
  ButtonContainer,
  ModalContainer,
  ModalContent,
  StatusHeading,
  StatusImage,
  StatusImageContainer,
  StatusInfo,
} from '@components/modals/StatusModal/styled.ts';
import { PATH } from '@constants/paths.ts';
import { JSX } from 'react';
import { useNavigate } from 'react-router-dom';

function StatusModal(): JSX.Element {
  const status = true;
  const navigate = useNavigate();

  const handleClick = () => navigate(PATH.TO_HOME);

  return (
    <ModalContainer>
      <StatusImageContainer className={status ? 'error' : 'success'}>
        <StatusImage src={status ? error : success} />
      </StatusImageContainer>
      <ModalContent>
        <StatusHeading>
          {status ? 'Вход не выполнен' : 'Вход выполнен'}
        </StatusHeading>
        <StatusInfo>
          {status
            ? 'Пользователя с такими данными не существует'
            : 'Доступ к приложению открыт'}
        </StatusInfo>
      </ModalContent>
      <ButtonContainer>
        <Button onClick={handleClick}>Закрыть</Button>
      </ButtonContainer>
    </ModalContainer>
  );
}

export default StatusModal;

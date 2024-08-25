import error from '@assets/error.svg';
import success from '@assets/success.svg';
import {
  ButtonContainer,
  ModalContainer,
  ModalContent,
  StatusHeading,
  StatusImage,
  StatusImageContainer,
  StatusInfo,
} from '@pages/Modal/modals/StatusModal/styled.ts';
import { Button } from '@pages/Modal/modals/ValidationModal/styled.ts';
import { JSX } from 'react';

function ValidationModal(): JSX.Element {
  const status = true;

  return (
    <ModalContainer>
      <StatusImageContainer className={status ? 'error' : 'success'}>
        <StatusImage src={status ? error : success} />
      </StatusImageContainer>
      <ModalContent>
        <StatusHeading>{status ? 'Отклонено' : 'Подтверждение'}</StatusHeading>
        <StatusInfo>
          {status
            ? 'Убедитесь в правильности введенных данных и попробуйте еще раз'
            : 'Вы действительно хотите добавить новое животное?'}
        </StatusInfo>
      </ModalContent>
      <ButtonContainer>
        <Button className={status ? 'error' : 'success'}>
          {status ? 'Заново' : 'Добавить'}
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button>{status ? 'Выйти' : 'Не добавлять'}</Button>
      </ButtonContainer>
    </ModalContainer>
  );
}

export default ValidationModal;

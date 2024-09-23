import error from '@assets/error.svg';
import success from '@assets/success.svg';
import { PATH } from '@constants/paths.ts';
import {
  BUTTON_ADD,
  BUTTON_RETRY,
  STATUS_CONFIRMED,
  STATUS_CONFIRMED_INFO,
  STATUS_REJECTED,
  STATUS_REJECTED_INFO,
} from '@constants/values.ts';
import { DataType } from '@custom-types/dataType.ts';
import {
  ButtonContainer,
  InfoContent,
  ModalContainer,
  ModalContent,
  StatusHeading,
  StatusImage,
  StatusImageContainer,
  StatusInfo,
} from '@pages/Modal/modals/StatusModal/styled.ts';
import { Button } from '@pages/Modal/modals/ValidationModal/styled.ts';
import { JSX } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function ValidationModal(): JSX.Element {
  const location = useLocation();
  const status = location.state?.status ?? false;
  const { dataType } = useParams<{ dataType: DataType }>();
  const navigate = useNavigate();

  const handleTryAgainClick = () => {
    navigate(PATH.TO_HOME);
  };

  return (
    <ModalContainer>
      <InfoContent>
        <StatusImageContainer className={!status ? 'error' : 'success'}>
          <StatusImage src={!status ? error : success} />
        </StatusImageContainer>
        <ModalContent>
          <StatusHeading>
            {!status ? STATUS_REJECTED : STATUS_CONFIRMED}
          </StatusHeading>
          <StatusInfo>
            {!status ? STATUS_REJECTED_INFO : STATUS_CONFIRMED_INFO[dataType!]}
          </StatusInfo>
        </ModalContent>
        <ButtonContainer>
          <Button
            onClick={handleTryAgainClick}
            className={!status ? 'error' : 'success'}
          >
            {!status ? BUTTON_RETRY : BUTTON_ADD}
          </Button>
        </ButtonContainer>
      </InfoContent>
    </ModalContainer>
  );
}

export default ValidationModal;

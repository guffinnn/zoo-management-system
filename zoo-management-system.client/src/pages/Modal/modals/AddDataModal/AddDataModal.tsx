import './AddDataModal.css';

import { fieldConfig } from '@constants/tables/animal.ts';
import {
  FormFrame,
  ModalContainer,
} from '@pages/Modal/modals/AddDataModal/styled.ts';
import {
  Form,
  ModalHeading,
  SubmitButton,
} from '@pages/Modal/modals/AuthModal/styled.ts';
import { Element } from '@pages/Modal/modals/elements/Element.tsx';
import { JSX } from 'react';

function AddDataModal(): JSX.Element {
  const fields = fieldConfig['workTime'];

  return (
    <ModalContainer>
      <ModalHeading>Заполните поля</ModalHeading>
      <FormFrame>
        <Form>
          {fields.map((field) => (
            <Element key={field.id} element={field} />
          ))}
          <SubmitButton type="submit" value="Подтвердить действия" />
        </Form>
      </FormFrame>
    </ModalContainer>
  );
}

export default AddDataModal;

import './AddDataModal.css';

import { PATH } from '@constants/paths.ts';
import { validationSchema } from '@constants/tables/animal.ts';
import { fieldConfig, initialValues } from '@constants/tables/global.ts';
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
import { Formik } from 'formik';
import { JSX } from 'react';
import { useNavigate } from 'react-router-dom';

function AddDataModal(): JSX.Element {
  const fields = fieldConfig['animal'];
  const initial = initialValues['animal'];

  const navigate = useNavigate();

  return (
    <ModalContainer>
      <ModalHeading>Заполните поля</ModalHeading>
      <FormFrame>
        <Formik
          initialValues={initial}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            navigate(PATH.TO_VALIDATION_MODAL);
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              {fields.map((field) => (
                <Element key={field.id} element={field} />
              ))}
              <SubmitButton type="submit" value="Подтвердить действия" />
            </Form>
          )}
        </Formik>
      </FormFrame>
    </ModalContainer>
  );
}

export default AddDataModal;

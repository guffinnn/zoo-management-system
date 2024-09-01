import './AddDataModal.css';

import { PATH } from '@constants/paths.ts';
import { fieldConfig, initialValues } from '@constants/tables/global.ts';
import { validationSchemas } from '@constants/validationSchemas.ts';
import {
  FormFrame,
  ModalContainer,
} from '@pages/Modal/modals/AddDataModal/styled.ts';
import { Element } from '@pages/Modal/modals/elements/Element.tsx';
import { Form, ModalHeading, SubmitButton } from '@pages/Modal/styled.ts';
import { Formik } from 'formik';
import { JSX } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type DataType = 'animal' | 'workTime';

function AddDataModal(): JSX.Element {
  const { dataType } = useParams<{ dataType: DataType }>();
  const fields = fieldConfig[dataType!];
  const initial = initialValues[dataType!];
  const validationSchema = validationSchemas[dataType!];

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

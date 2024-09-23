import './AddDataModal.css';

import { PATH } from '@constants/paths.ts';
import { fieldConfig, initialValues } from '@constants/tables/global.ts';
import { validationSchemas } from '@constants/validationSchemas.ts';
import { DataType, EntityDataUnion } from '@custom-types/dataType.ts';
import { dataFetchers, dataPushers } from '@helpers/addDataModalHelpers.ts';
import {
  FormFrame,
  ModalContainer,
} from '@pages/Modal/modals/AddDataModal/styled.ts';
import { Element } from '@pages/Modal/modals/elements/Element.tsx';
import { Form, ModalHeading, SubmitButton } from '@pages/Modal/styled.ts';
import { Formik } from 'formik';
import { JSX, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AddDataModal({ id }: { id?: string }): JSX.Element {
  const { dataType } = useParams<{ dataType: DataType }>();
  const fields = fieldConfig[dataType!];
  const initial = initialValues[dataType!];
  const validationSchema = validationSchemas[dataType!];

  const [currentValues, setCurrentValues] = useState(initial);

  useEffect(() => {
    if (id && dataType) {
      const fetchData = dataFetchers[dataType];
      fetchData(id).then((data) => {
        if (data) {
          setCurrentValues(data);
        }
      });
    }
  }, [id, dataType]);

  const navigate = useNavigate();

  return (
    <ModalContainer>
      <ModalHeading>Заполните поля</ModalHeading>
      <FormFrame>
        <Formik
          initialValues={currentValues}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={async (values) => {
            console.log(values);
            let isSend = true;
            try {
              if (!navigator.onLine) {
                throw new Error('No Internet connection');
              }
              const pushData = dataPushers[dataType!];
              await pushData(values as EntityDataUnion);
            } catch {
              isSend = false;
            } finally {
              const TO_MODAL = PATH.TO_VALIDATION_MODAL;
              navigate(TO_MODAL[dataType!], { state: { status: isSend } });
            }
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

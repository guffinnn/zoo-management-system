import './AddDataModal.css';

import {
  FormFrame,
  InputWithLabel,
  ModalContainer,
  MyFormInput,
  MyFormLabel,
  MyInputGroup,
  MyInputGroupText,
  SelectWithLabel,
  TextArea,
  TextAreaContainer,
} from '@pages/Modal/modals/AddDataModal/styled.ts';
import {
  Form,
  ModalHeading,
  SubmitButton,
} from '@pages/Modal/modals/AuthModal/styled.ts';
import { JSX } from 'react';

function AddDataModal(): JSX.Element {
  return (
    <ModalContainer>
      <ModalHeading>Заполните поля</ModalHeading>
      <FormFrame>
        <Form>
          <MyFormLabel htmlFor="nickname">Кличка</MyFormLabel>
          <MyFormInput type="text" id="nickname" placeholder="Введите кличку" />
          <MyInputGroup>
            <MyInputGroupText>Вид:</MyInputGroupText>
            <SelectWithLabel id="aviary" className="form-control">
              <option className="option" value="NULL">
                Выберите вид
              </option>
            </SelectWithLabel>
          </MyInputGroup>
          <MyInputGroup>
            <MyInputGroupText>Дата рождения:</MyInputGroupText>
            <InputWithLabel
              type="date"
              id="date_of_birth"
              placeholder="Выберите дату"
            />
          </MyInputGroup>
          <MyInputGroup>
            <MyInputGroupText>Дата зачисления:</MyInputGroupText>
            <InputWithLabel
              type="date"
              id="date_of_registration"
              placeholder="Выберите дату"
            />
          </MyInputGroup>
          <MyFormLabel htmlFor="medical_indicators">Мед. показания</MyFormLabel>
          <TextAreaContainer>
            <TextArea
              id="medical_indicators"
              placeholder="Опишите мед. обследования"
            />
          </TextAreaContainer>
          <SubmitButton type="submit" value="Подтвердить действия" />
        </Form>
      </FormFrame>
    </ModalContainer>
  );
}

export default AddDataModal;

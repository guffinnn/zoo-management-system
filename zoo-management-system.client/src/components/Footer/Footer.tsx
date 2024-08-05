import './Footer.css';

import burger from '@assets/burger.svg';
import select from '@assets/select-arrow.svg';
import user from '@assets/user-icon.png';
import { toggleMenu } from '@store/menuSlice';
import { JSX } from 'react';
import { useDispatch } from 'react-redux';

function Footer(): JSX.Element {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      {/*FOOTER COMPONENT*/}
      <footer className="footer">
        <div className="burger__menu" onClick={handleClick}>
          <img className="burger__icon" src={burger} alt="Меню" />
        </div>
        {/*LINK TO AUTH MODAL*/}
        <div className="footer">
          <div className="div__status__content">
            <div className="content__image">
              <img className="user__icon" src={user} alt="Аккаунт" />
            </div>
            <div className="content__info">
              <p className="info__head">Сотрудник</p>
              <p className="info__settings">Настройки</p>
            </div>
          </div>
          <div className="content__image">
            <img className="select__arrow" src={select} alt="Подробнее" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

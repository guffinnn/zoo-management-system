import './Footer.css';

import burger from '@assets/burger.svg';
import select from '@assets/select-arrow.svg';
import user from '@assets/user-icon.png';
import { closeMenu, openMenu } from '@store/menuSlice.ts';
import { RootState } from '@store/store.ts';
import { JSX } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Footer(): JSX.Element {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);

  const handleClick = () => {
    if (isOpen) {
      dispatch(closeMenu());
    } else {
      dispatch(openMenu());
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="burger__menu" onClick={handleClick}>
          <img className="burger__icon" src={burger} alt="Меню" />
        </div>
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

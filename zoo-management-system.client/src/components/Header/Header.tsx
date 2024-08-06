import './Header.css';

import more from '@assets/more-icon.svg';
import { JSX } from 'react';

interface HeaderProps {
  pageTitle: string;
  children?: JSX.Element;
}

function Header({ pageTitle, children }: HeaderProps): JSX.Element {
  return (
    <>
      <header className="header">
        <p className="page__name">{pageTitle}</p>
        <div className={`buttons__frame ${!children ? null : '--not_empty'}`}>
          {children}
          <div className="more__container">
            <img className="more__image" src={more} alt="Еще" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

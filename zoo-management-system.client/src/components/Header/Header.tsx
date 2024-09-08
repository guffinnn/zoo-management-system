import './Header.css';

import more from '@assets/more-icon.svg';
import {
  SearchParamsItem,
  SearchParamsMenu,
  StyledDivider,
  StyledDropdown,
  StyledDropdownToggle,
} from '@components/Header/styled.ts';
import { PAGE_FIELDS } from '@constants/sortCriteria.ts';
import { JSX } from 'react';

interface HeaderProps {
  pageTitle: string;
  children?: JSX.Element;
}

function Header({ pageTitle, children }: HeaderProps): JSX.Element {
  const pageFields = PAGE_FIELDS[pageTitle];

  return (
    <>
      <header className="header">
        <p className="page__name">{pageTitle}</p>
        <div className={`buttons__frame ${!children ? null : '--not_empty'}`}>
          {children}
          <StyledDropdown>
            <StyledDropdownToggle className="more__container">
              <img className="more__image" src={more} alt="Еще" />
            </StyledDropdownToggle>
            <SearchParamsMenu>
              {pageFields ? (
                <>
                  <SearchParamsItem>Поиск по полю:</SearchParamsItem>
                  <StyledDivider />
                  {pageFields.map((value, index) => (
                    <SearchParamsItem key={index} active={index === 0}>
                      {value}
                    </SearchParamsItem>
                  ))}
                </>
              ) : (
                <SearchParamsItem>Недоступно</SearchParamsItem>
              )}
            </SearchParamsMenu>
          </StyledDropdown>
        </div>
      </header>
    </>
  );
}

export default Header;

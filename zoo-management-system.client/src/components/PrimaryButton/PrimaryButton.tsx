import './PrimaryButton.css';

import { JSX } from 'react';
import { Link } from 'react-router-dom';

interface PrimaryButtonProps {
  name: string;
  linkTo: string;
}

function PrimaryButton({ name, linkTo }: PrimaryButtonProps): JSX.Element {
  return (
    <div className="add__button__container">
      <Link to={linkTo}>
        <button className="add__button">{name}</button>
      </Link>
    </div>
  );
}

export default PrimaryButton;

import './PrimaryButton.css';

import { JSX } from 'react';

interface PrimaryButtonProps {
  name: string;
  linkTo: string;
}

function PrimaryButton({ name, linkTo }: PrimaryButtonProps): JSX.Element {
  return (
    <div className="add__button__container">
      <a href={linkTo}>
        <button className="add__button">{name}</button>
      </a>
    </div>
  );
}

export default PrimaryButton;

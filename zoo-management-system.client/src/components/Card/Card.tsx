import './Card.css';

import { JSX } from 'react';

interface CardProps {
  maskColor: string;
  info: string;
  imgSrc: string;
  imgAlt: string;
}

function Card({ maskColor, info, imgSrc, imgAlt }: CardProps): JSX.Element {
  return (
    <>
      <div className="card">
        <div className={`card__mask ${maskColor}`}>
          <div className="card__content">
            <p className="card__info">{info}</p>
          </div>
        </div>
        <img className="card__background" src={imgSrc} alt={imgAlt} />
      </div>
    </>
  );
}

export default Card;

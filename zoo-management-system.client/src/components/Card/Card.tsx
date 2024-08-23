import './Card.css';

import { JSX } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  link: string;
  maskColor: string;
  info: string;
  imgSrc: string;
  imgAlt: string;
}

function Card({
  link,
  maskColor,
  info,
  imgSrc,
  imgAlt,
}: CardProps): JSX.Element {
  return (
    <>
      <div className="card_my">
        <Link to={link}>
          <div className={`card__mask ${maskColor}`}>
            <div className="card__content">
              <p className="card__info">{info}</p>
            </div>
          </div>
          <img className="card__background" src={imgSrc} alt={imgAlt} />
        </Link>
      </div>
    </>
  );
}

export default Card;

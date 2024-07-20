import { JSX } from "react"
import './Card.css'

interface CardProps {
    maskColor: string;
    info: string;
    imgSrc: string;
    imgAlt: string;
}

function Card({ maskColor, info, imgSrc, imgAlt }: CardProps): JSX.Element {
    return (
        <>
            {/*CARD COMPONENT*/}
            <div className="card">
                <div className={`card__mask ${maskColor}`}>
                    <div className="card__content">
                        <p className="card__info">{info}</p>
                    </div>
                </div>
                <img className="card__background" src={imgSrc} width={350} height={190} alt={imgAlt}/>
            </div>
        </>
    )
}

export default Card
import {JSX} from "react"
import './Header.css'
import more from "../../assets/more-icon.svg";

type Props = {
    pageTitle: string
}

function Header({ pageTitle }: Props): JSX.Element {
    return (
        <>
            {/*HEADER COMPONENT*/}
            <header className="header">
                <p className="page__name">{pageTitle}</p>
                <div className="more__container">
                    <img className="more__image" src={more} alt="Еще" />
                </div>
            </header>
        </>
    )
}

export default Header
import { JSX } from "react"
import "./Header.css"
import more from "../../assets/more-icon.svg"

type Props = {
    pageTitle: string,
    children?: JSX.Element
}

function Header({ pageTitle, children }: Props): JSX.Element {
    return (
        <>
            {/*HEADER COMPONENT*/}
            <header className="header">
                <p className="page__name">{pageTitle}</p>
                {/*RIGHT PART*/}
                <div className={`buttons__frame ${!children ? null : "--not_empty"}`}>
                    {children}
                    <div className="more__container">
                        <img className="more__image" src={more} alt="Еще"/>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
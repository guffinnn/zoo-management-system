import {JSX} from "react"
import './Footer.css'
import burger from "../../assets/burger.svg"
import user from "../../assets/user-icon.png"
import select from "../../assets/select-arrow.svg"

function Footer(): JSX.Element {
    return (
        <>
            {/*FOOTER COMPONENT*/}
            <footer className="footer">
                <div className="burger__menu">
                    <img className="burger__icon" src={burger} alt="Меню"/>
                </div>
                {/*LINK TO AUTH MODAL*/}
                <div className="footer">
                    <div className="div__status__content">
                        <div className="content__image">
                            <img
                                className="user__icon"
                                src={user}
                                alt="Аккаунт"
                            />
                        </div>
                        <div className="content__info">
                            <p className="info__head">Сотрудник</p>
                            <p className="info__settings">Настройки</p>
                        </div>
                    </div>
                    <div className="content__image">
                        <img
                            className="select__arrow"
                            src={select}
                            alt="Подробнее"
                        />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
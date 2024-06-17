import {JSX} from "react"
import burger from "../../assets/burger.svg"
import user from "../../assets/user-icon.png"
import select from "../../assets/select-arrow.svg"

interface ListRow {
    name: string;
    link: string;
}

const LIST_ROWS: ListRow[] = [
    { name: "Главная", link: "/" },
    { name: "Животные", link: "#" },
    { name: "Рабочее время", link: "#" },
    { name: "Мед. обследования", link: "#" },
    { name: "Кормление", link: "#" },
    { name: "Уборка", link: "#" },
    { name: "Сотрудники", link: "#" }
]

function AsideNavBar(): JSX.Element {
    return (
        <>
            {/*ASIDE COMPONENT*/}
            <aside className="aside">
                <nav className="aside__nav">
                    <ul className="aside__ul__list">
                        {/*LIST ELEMENTS*/}
                        {LIST_ROWS.map((item) => (
                            <li className="list__point">
                                <a href={item.link}>
                                    <div className={`content ${item.name === "Главная" && 'active'}`}>
                                        {item.name}
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
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
            </aside>
        </>
    )
}

export default AsideNavBar
import {JSX} from "react"
import './AsideNavBar.css'
import Footer from "../Footer/Footer.tsx"

interface ListRow {
    name: string,
    link: string
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
                <Footer />
            </aside>
        </>
    )
}

export default AsideNavBar
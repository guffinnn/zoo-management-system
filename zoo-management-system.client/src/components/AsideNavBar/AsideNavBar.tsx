import { JSX, useState, useEffect } from "react"
/*REDUX*/
import { useSelector } from "react-redux"
import { RootState } from "../../store/store.ts"
import './AsideNavBar.css'
import Footer from "../Footer/Footer.tsx"
import NavListPoint from "../NavListPoint/NavListPoint.tsx"

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
    const [activeKey, setActiveKey] = useState<number | null>(0)
    const isOpen = useSelector((state: RootState) => state.menu.isOpen)

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('open');
        } else {
            document.body.classList.remove('open');
        }
    }, [isOpen]);

    return (
        <>
            {/*ASIDE COMPONENT*/}
            <aside className={`aside ${isOpen ? 'open' : ''}`}>
                <nav className={`aside__nav ${isOpen ? 'open' : ''}`}>
                    <ul className="aside__ul__list">
                        {LIST_ROWS.map((item, index) => (
                            <>
                                {/*NAV_LIST_POINT COMPONENT*/}
                                <NavListPoint
                                    key={index}
                                    componentKey={index}
                                    pageItem={item}
                                    activeKey={activeKey}
                                    setActiveKey={setActiveKey}
                                />
                            </>
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
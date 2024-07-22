import { JSX } from "react"
import "./Home.css"
import gibbon from "../../assets/gibbon.jpeg"
import employee from "../../assets/zookeeper.jpeg"
import medicine from "../../assets/medicine.jpeg"
import Header from "../../components/Header/Header.tsx"
import Card from "../../components/Card/Card.tsx"

function Home(): JSX.Element {
    return (
        <>
            {/*HEADER COMPONENT*/}
            <Header pageTitle="Главная страница" />
            {/*SECTION COMPONENT*/}
            <section className="section">
                <div className="cards">
                    <div className="cards__fluid">
                        {/*CARDS COMPONENTS*/}
                        <Card maskColor="green" info="Животные" imgSrc={gibbon} imgAlt="Перейти" />
                        <Card maskColor="orange" info="Сотрудники" imgSrc={employee} imgAlt="Перейти" />
                        <Card maskColor="blue" info="Здоровье" imgSrc={medicine} imgAlt="Перейти" />
                    </div>
                </div>
                <div className="page__content">
                    <p className="div__p__content">Содержимое страницы</p>
                </div>
            </section>
        </>
    )
}

export default Home
import {JSX} from "react"
import './Home.css'
import gibbon from "../../assets/gibbon.jpeg"
import employee from "../../assets/zookeeper.jpeg"
import medicine from "../../assets/medicine.jpeg"
import AsideNavBar from '../../components/AsideNavBar/AsideNavBar.tsx';
import Header from "../../components/Header/Header.tsx";

function Home(): JSX.Element {
    return (
        <>
            {/*ASIDE COMPONENT*/}
            <AsideNavBar />
            {/*MAIN COMPONENT*/}
            <main className="main">
                {/*HEADER COMPONENT*/}
                <Header pageTitle="Главная страница" />
                {/*SECTION COMPONENT*/}
                <section className="section">
                    <div className="cards">
                        <div className="cards__fluid">
                            {/*CARDS COMPONENTS*/}
                            <div className="card">
                                    <div className="card__mask green">
                                        <div className="card__content">
                                            <p className="card__info">Животные</p>
                                        </div>
                                    </div>
                                    <img
                                        className="card__background"
                                        src={gibbon}
                                        alt="Перейти"
                                    />
                                </div>
                            <div className="card">
                                <div className="card__mask orange">
                                    <div className="card__content">
                                        <p className="card__info">Сотрудники</p>
                                    </div>
                                </div>
                                <img
                                    className="card__background"
                                    src={employee}
                                    alt="Перейти"
                                />
                            </div>
                            <div className="card">
                                <div className="card__mask blue">
                                    <div className="card__content">
                                        <p className="card__info">Здоровье</p>
                                    </div>
                                </div>
                                <img
                                    className="card__background"
                                    src={medicine}
                                    alt="Перейти"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="page__content">
                        <p className="div__p__content">Содержимое страницы</p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
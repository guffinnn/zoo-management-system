import { JSX } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
/*REDUX*/
import { useSelector } from "react-redux"
import { RootState } from "./store/store.ts"
import AsideNavBar from "./components/AsideNavBar/AsideNavBar.tsx"
import Home from "./pages/Home/Home"
import Animals from "./pages/Animals/Animals"

function App(): JSX.Element {
    const isOpen = useSelector((state: RootState) => state.menu.isOpen)

    return (
        <>
            {/*ASIDE COMPONENT*/}
            <AsideNavBar />
            {/*MAIN COMPONENT*/}
            <main className={`main ${isOpen ? 'open' : ''}`}>
                <Router>
                    <Routes>
                        <Route path="/zoo-management-system" element={<Home />} />
                        <Route path="/zoo-management-system/animals" element={<Animals />} />
                    </Routes>
                </Router>
            </main>
        </>
    )
}

export default App
import {JSX} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home'

function App(): JSX.Element {
    return (
        <Router>
            <Routes>
                <Route path="/zoo-management-system" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App
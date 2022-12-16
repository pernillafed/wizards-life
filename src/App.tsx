import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import { useAuthContext } from "./contexts/AuthContext"
import Start from "./pages/start/Start"

const App = () => {
    const { currentUser } = useAuthContext();

    return (
        <div className="App">
            <Navbar />
            <div style={{ display: "flex" }}>
                {currentUser && <Sidebar />}
                <Routes>
                    <Route path="/" element={ <Start /> } />
                </Routes>
            </div>
        </div>
    )
}

export default App

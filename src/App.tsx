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
            {currentUser && <Sidebar />}
            <Routes>
                <Route path="/" element={ <Start /> } />
            </Routes>
        </div>
    )
}

export default App

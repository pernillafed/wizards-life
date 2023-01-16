import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import { useAuthContext } from "./contexts/AuthContext"
import Start from "./pages/start/Start"

const App = () => {
    const { currentUser } = useAuthContext();

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    return (
        <div className="App">
            <Navbar isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible} />
            {currentUser && <Sidebar isSidebarVisible={isSidebarVisible} />}
            <Routes>
                <Route path="/" element={ <Start isSidebarVisible={isSidebarVisible}  /> } />
            </Routes>
        </div>
    )
}

export default App

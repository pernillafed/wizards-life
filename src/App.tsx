import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import RequireAuth from "./components/require-auth/RequireAuth"
/** @jsxImportSource theme-ui */

import Sidebar from "./components/sidebar/Sidebar"
import { useAuthContext } from "./contexts/AuthContext"
import Home from "./pages/home/Home"
import Start from "./pages/start/Start"

const App = () => {
    const { currentUser } = useAuthContext();

    return (
        <div className="App">
            <Navbar />
            <div sx={{ display: "flex" }}>
                {currentUser && <Sidebar />}
                <Routes>
                    <Route path="/" element={ <Start /> } />
                    <Route path="/home" element={ <RequireAuth redirectTo="/"><Home /></RequireAuth> } />
                </Routes>
            </div>
        </div>
    )
}

export default App

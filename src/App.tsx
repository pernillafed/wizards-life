import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import RequireAuth from "./components/require-auth/RequireAuth"
import Sidebar from "./components/sidebar/Sidebar"
import { useAuthContext } from "./contexts/AuthContext"
import Book from "./pages/library/book/Book"
import Library from "./pages/library/Library"
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
                <Route path="/library" element={
                    <RequireAuth redirectTo="/">
                        <Library />
                    </RequireAuth>
                } />
                <Route path="/library/book/:bookTitle" element={
                    <RequireAuth redirectTo="/">
                        <Book />
                    </RequireAuth>
                } />
            </Routes>
        </div>
    )
}

export default App

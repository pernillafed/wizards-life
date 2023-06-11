import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import RequireAuth from "./components/require-auth/RequireAuth"
import Sidebar from "./components/sidebar/Sidebar"
import { useAuthContext } from "./contexts/AuthContext"
import Book from "./pages/library/book/Book"
import CharacterPage from "./pages/library/book/book-content/character-page/CharacterPage"
import HousePage from "./pages/library/book/book-content/house-page/HousePage"
import Library from "./pages/library/Library"
import Start from "./pages/start/Start"
import CreaturePage from "./pages/library/book/book-content/creature-page/CreaturePage"

const App = () => {
    const { currentUser } = useAuthContext();

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    return (
        <div className="App">
            <Navbar isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible} />
            {currentUser && <Sidebar isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible} />}
            <Routes>
                <Route path="/" element={ <Start isSidebarVisible={isSidebarVisible}  /> } />
                <Route path="/library" element={
                    <RequireAuth redirectTo="/">
                        <Library isSidebarVisible={isSidebarVisible} />
                    </RequireAuth>
                } />
                <Route path="/library/book/:bookId" element={
                    <RequireAuth redirectTo="/">
                        <Book isSidebarVisible={isSidebarVisible} />
                    </RequireAuth>
                } />
                <Route path="/library/book/:bookId/character/:characterId" element={
                    <RequireAuth redirectTo="/">
                        <CharacterPage isSidebarVisible={isSidebarVisible} />
                    </RequireAuth>
                } />
                <Route path="/library/book/:bookId/species/:speciesId" element={
                    <RequireAuth redirectTo="/">
                        <CreaturePage isSidebarVisible={isSidebarVisible} />
                    </RequireAuth>
                } />
                <Route path="/library/book/:bookId/house/:houseId" element={
                    <RequireAuth redirectTo="/">
                        <HousePage isSidebarVisible={isSidebarVisible} />
                    </RequireAuth>
                } />
            </Routes>
        </div>
    )
}

export default App

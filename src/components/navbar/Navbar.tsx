/** @jsxImportSource theme-ui */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { ButtonStyles } from "../../Global.styles";
import { NavbarTitleStyles, NavbarWrapperStyles } from "./Navbar.styles";

const Navbar = () => {
    const { currentUser, logout } = useAuthContext();

    const navigate = useNavigate();

    const [showSidebar, setShowSidebar] = useState(false);

    const handleLogOut = () => {
        logout();
        navigate("/");
    };

    return (
        <div sx={NavbarWrapperStyles}>
            <div sx={NavbarTitleStyles}>Wizards Life</div>
            {currentUser && (
                <>
                    <button sx={{
                        ...ButtonStyles,
                        display: ["none", "inline", "inline"],
                        backgroundColor: "secondaryBackground",
                        ":hover": {
                            backgroundColor: "#4f3f32"
                        }
                    }} onClick={handleLogOut}>Log out</button>
                    <button sx={{
                        ...ButtonStyles,
                        display: ["inline", "none", "none"],
                        backgroundColor: "secondaryBackground",
                        ":hover": {
                            backgroundColor: "#4f3f32"
                        }
                    }} onClick={() => setShowSidebar(!showSidebar)}>Menu</button>
                </>
            )}
        </div>
    );
}
 
export default Navbar;
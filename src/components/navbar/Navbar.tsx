/** @jsxImportSource theme-ui */

import { useAuthContext } from "../../contexts/AuthContext";
import { NavbarTitleStyles, NavbarWrapperStyles } from "./Navbar.styles";

const Navbar = () => {
    const { currentUser, logout } = useAuthContext();

    return (
        <div sx={NavbarWrapperStyles}>
            <div sx={NavbarTitleStyles}>Wizards Life</div>
            {currentUser && <button onClick={logout}>Log out</button>}
        </div>
    );
}
 
export default Navbar;
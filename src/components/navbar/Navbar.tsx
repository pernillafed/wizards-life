/** @jsxImportSource theme-ui */

import { NavbarTitleStyles, NavbarWrapperStyles } from "./Navbar.styles";

const Navbar = () => {
    return (
        <div sx={NavbarWrapperStyles}>
            <div sx={NavbarTitleStyles}>Wizards Life</div>
        </div>
    );
}
 
export default Navbar;
/** @jsxImportSource theme-ui */

import { Link } from "react-router-dom";
import { SidebarLinkStyles, SidebarWrapperStyles } from "./Sidebar.styles";

const Sidebar = () => {
    return (
        <div sx={SidebarWrapperStyles}>
            <Link sx={SidebarLinkStyles} to="/">Profile</Link>
            <Link sx={SidebarLinkStyles} to="/">Friends</Link>
            <Link sx={SidebarLinkStyles} to="/">Owl post</Link>
            <Link sx={SidebarLinkStyles} to="/">Common room</Link>
            <Link sx={SidebarLinkStyles} to="/">Classes</Link>
            <Link sx={SidebarLinkStyles} to="/">Library</Link>
            <Link sx={SidebarLinkStyles} to="/">Diagon alley</Link>
            <Link sx={SidebarLinkStyles} to="/">Log out</Link>
        </div>
    );
}
 
export default Sidebar;
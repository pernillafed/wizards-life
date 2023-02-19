/** @jsxImportSource theme-ui */

import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { SidebarLinkStyles, SidebarWrapperStyles } from "./Sidebar.styles";

export type SidebarVisibilityProps = {
    isSidebarVisible: boolean;
}

export type SidebarProps = SidebarVisibilityProps & {
    setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isSidebarVisible, setIsSidebarVisible }: SidebarProps) => {
    const { logout } = useAuthContext();

    const handleLogOut = () => {
        setIsSidebarVisible(false);
        logout();
    }

    return (
        <div sx={isSidebarVisible ? SidebarWrapperStyles : {...SidebarWrapperStyles, display: ["none", "flex", "flex"]}}>
            <Link sx={SidebarLinkStyles} to="/" onClick={() => setIsSidebarVisible(false)}>Home</Link>
            <Link sx={SidebarLinkStyles} to="/profile" onClick={() => setIsSidebarVisible(false)}>Profile</Link>
            <Link sx={SidebarLinkStyles} to="/friends" onClick={() => setIsSidebarVisible(false)}>Friends</Link>
            <Link sx={SidebarLinkStyles} to="/owl-post" onClick={() => setIsSidebarVisible(false)}>Owl post</Link>
            <Link sx={SidebarLinkStyles} to="/common-room" onClick={() => setIsSidebarVisible(false)}>Common room</Link>
            <Link sx={SidebarLinkStyles} to="/classes" onClick={() => setIsSidebarVisible(false)}>Classes</Link>
            <Link sx={SidebarLinkStyles} to="/library" onClick={() => setIsSidebarVisible(false)}>Library</Link>
            <Link sx={SidebarLinkStyles} to="/diagon-alley">Diagon alley</Link>
            <Link sx={SidebarLinkStyles} to="/" onClick={handleLogOut}>Log out</Link>
        </div>
    );
}
 
export default Sidebar;
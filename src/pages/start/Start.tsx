import { SidebarVisibilityProps } from "../../components/sidebar/Sidebar";
import { useAuthContext } from "../../contexts/AuthContext";
import Home from "./home/Home";
import LoginOrCreate from "./login-or-create/LoginOrCreate";

const Start = ({ isSidebarVisible }: SidebarVisibilityProps) => {
    const { currentUser } = useAuthContext();

    return currentUser ? <Home isSidebarVisible={isSidebarVisible} /> : <LoginOrCreate />;
}
 
export default Start;
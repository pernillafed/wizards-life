import { useAuthContext } from "../../contexts/AuthContext";
import Home from "./home/Home";
import LoginOrCreate from "./login-or-create/LoginOrCreate";

const Start = () => {
    const { currentUser } = useAuthContext();

    return currentUser ? <Home /> : <LoginOrCreate />;
}
 
export default Start;
/** @jsxImportSource theme-ui */

import { useState } from "react";
import CreateAccountForm from "./create-account-form/CreateAccountForm";
import { HomeWrapperStyles, LoginOrCreateContainerStyles } from "./Home.styles";
import LoginForm from "./login-form/LoginForm";

const Home = () => {
    const [showLoginForm, setShowLoginForm] = useState(true);

    return (
        <div sx={HomeWrapperStyles}>
            <div sx={LoginOrCreateContainerStyles}>
                {showLoginForm
                    ? <LoginForm setShowLoginForm={setShowLoginForm} />
                    : <CreateAccountForm setShowLoginForm={setShowLoginForm} />
                }
            </div>
        </div>
    );
}
 
export default Home;
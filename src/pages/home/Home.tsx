/** @jsxImportSource theme-ui */

import { useState } from "react";
import CreateAccountForm from "./create-account-form/CreateAccountForm";
import { HomeWrapperStyles, LoginOrCreateContainerStyles, SwitchFormsLinkStyles } from "./Home.styles";
import LoginForm from "./login-form/LoginForm";

const Home = () => {
    const [showLoginForm, setShowLoginForm] = useState(true);

    return (
        <div sx={HomeWrapperStyles}>
            <div sx={LoginOrCreateContainerStyles}>
                {showLoginForm
                    ? (
                        <>
                            <LoginForm />
                            <div sx={{ color: "primaryText", fontFamily: "paragraph", textAlign: "center" }}>
                                Don't have an account?
                                <span
                                    data-testid="switch-forms-link"
                                    sx={SwitchFormsLinkStyles}
                                    onClick={() => setShowLoginForm(false)}
                                >Create one!</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <CreateAccountForm />
                            <div sx={{ color: "primaryText", fontFamily: "paragraph", textAlign: "center" }}>
                                Already have an account?
                                <span
                                    data-testid="switch-forms-link"
                                    sx={SwitchFormsLinkStyles}
                                    onClick={() => setShowLoginForm(true)}
                                >Log in!</span>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
}
 
export default Home;
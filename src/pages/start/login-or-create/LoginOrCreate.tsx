/** @jsxImportSource theme-ui */

import { useState } from "react";
import {
  LoginOrCreateFormStyles,
  LoginOrCreateWrapperStyles,
  SwitchFormsLinkStyles,
} from "./LoginOrCreate.styles";
import AuthForm from "./auth-form/AuthForm";

const LoginOrCreate = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const switchAuthForm = () => {
    if (showLoginForm) {
      setShowLoginForm(false);
    } else {
      setShowLoginForm(true);
    }
  };

  return (
    <div sx={LoginOrCreateWrapperStyles}>
      <div sx={LoginOrCreateFormStyles}>
        {showLoginForm ? (
          <AuthForm heading="Log in" buttonText="Log in" isLoginForm={showLoginForm} />
        ) : (
          <AuthForm heading="Create account" buttonText="Create" isLoginForm={showLoginForm} />
        )}
        <div sx={{ color: "primaryText", fontFamily: "paragraph", textAlign: "center" }}>
          {showLoginForm ? "Don't have an account?" : "Already have an account?"}
          <span data-testid="switch-forms-link" sx={SwitchFormsLinkStyles} onClick={switchAuthForm}>
            {showLoginForm ? "Create one!" : "Log in!"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginOrCreate;

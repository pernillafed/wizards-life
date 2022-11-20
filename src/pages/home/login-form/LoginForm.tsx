/** @jsxImportSource theme-ui */

import { Dispatch, SetStateAction } from "react";
import { ButtonStyles, InputFieldStyles, LoginFormStyles, LoginHeadingStyles } from "./LoginForm.styles";

export type LoginFormProps = {
    setShowLoginForm: Dispatch<SetStateAction<boolean>>;
}

const LoginForm = ({ setShowLoginForm }: LoginFormProps) => {
    return (
        <div>
            <div sx={LoginHeadingStyles}>Log in</div>
            <div sx={LoginFormStyles}>
                <input sx={InputFieldStyles} type="text" placeholder="username" />
                <input sx={InputFieldStyles} type="password" placeholder="password" />
                <input sx={ButtonStyles} type="submit" value="Log in" />
            </div>
            <div sx={{ color: "primaryText" }}>Don't have an account? <span sx={{ fontWeight: "bold", cursor: "pointer", ":hover": { textDecoration: "underline" } }} onClick={() => setShowLoginForm(false)}>Create one!</span></div>
        </div>
    );
}
 
export default LoginForm;
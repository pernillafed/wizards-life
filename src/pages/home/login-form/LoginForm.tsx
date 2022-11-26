/** @jsxImportSource theme-ui */

import { FormButtonStyles, FormInputFieldStyles, FormWrapperStyles, FormHeadingStyles } from "../Form.styles";

const LoginForm = () => {
    return (
        <div>
            <div sx={FormHeadingStyles}>Log in</div>
            <div sx={FormWrapperStyles}>
                <input sx={FormInputFieldStyles} type="text" placeholder="e-mail" />
                <input sx={FormInputFieldStyles} type="password" placeholder="password" />
                <input sx={FormButtonStyles} type="submit" value="Log in" />
            </div>
        </div>
    );
}
 
export default LoginForm;
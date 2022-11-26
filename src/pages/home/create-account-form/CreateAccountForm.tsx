/** @jsxImportSource theme-ui */

import { FormButtonStyles, FormHeadingStyles, FormInputFieldStyles, FormWrapperStyles } from "../Form.styles";

const CreateAccountForm = () => {
    return (
        <div>
            <div sx={FormHeadingStyles}>Create account</div>
            <div sx={FormWrapperStyles}>
                <input sx={FormInputFieldStyles} type="text" placeholder="username" />
                <input sx={FormInputFieldStyles} type="text" placeholder="e-mail" />
                <input sx={FormInputFieldStyles} type="password" placeholder="password" />
                <input sx={FormInputFieldStyles} type="password" placeholder="repeat password" />
                <input sx={FormButtonStyles} type="submit" value="Log in" />
            </div>
        </div>
    );
}
 
export default CreateAccountForm;
/** @jsxImportSource theme-ui */

import { FormEvent, useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import { FormButtonStyles, FormHeadingStyles, FormInputFieldStyles, FormWrapperStyles } from "../Form.styles";

const CreateAccountForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const { createAccount } = useAuthContext();

    const handleCreateAccount = async (e: FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);
            await createAccount(email, password);

        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    return (
        <div>
            <div sx={FormHeadingStyles}>Create account</div>
            <form sx={FormWrapperStyles} onSubmit={handleCreateAccount}>
                <input sx={FormInputFieldStyles} type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input sx={FormInputFieldStyles} type="text" placeholder="e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input sx={FormInputFieldStyles} type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input sx={FormInputFieldStyles} type="password" placeholder="repeat password" value={repeatedPassword} onChange={(e) => setRepeatedPassword(e.target.value)} />
                <input sx={FormButtonStyles} type="submit" value="Create" />
            </form>
        </div>
    );
}
 
export default CreateAccountForm;
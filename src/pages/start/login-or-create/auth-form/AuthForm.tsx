/** @jsxImportSource theme-ui */

import { FormEvent, useState } from "react";
import { useAuthContext } from "../../../../contexts/AuthContext";
import { AuthFormButtonStyles, AuthFormHeadingStyles, AuthFormInputFieldStyles, AuthFormWrapperStyles } from "./AuthForm.styles";
import { BeatLoader } from "react-spinners";
import { validateAuthInformation } from "../../../../utils/authValidation";

export type AuthFormProps = {
    heading: string;
    buttonText: string;
    isLoginForm: boolean;
}

const AuthForm = ({ heading, buttonText, isLoginForm }: AuthFormProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const { createAccount, login } = useAuthContext();

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();

        setError("");
        setLoading(false);

        try {
            setLoading(true);
            await login(email, password);
        } catch (err) {
            setLoading(false);
            setError("Wrong e-mail or password");
            throw new Error(`Failed to log in, ${err}`);
        }
    }

    const handleCreateAccount = async (e: FormEvent) => {
        e.preventDefault();

        setError("");
        setLoading(false);

        const errorMessage = validateAuthInformation(email, password, confirmedPassword);

        if(errorMessage) {
            setError(errorMessage);
            return;
        }

        try {
            setLoading(true);
            await createAccount(email, password);
        } catch (err) {
            setLoading(false);
            setError("Failed to create account");
            throw new Error(`Failed to create account, ${err}`);
        }
    };

    return (
        <div>
            <div sx={AuthFormHeadingStyles}>{heading}</div>
            <form sx={AuthFormWrapperStyles} onSubmit={isLoginForm ? handleLogin : handleCreateAccount}>
                <input
                    sx={AuthFormInputFieldStyles}
                    type="text"
                    placeholder="e-mail"
                    value={email}
                    onChange={(e) => {
                        setError("");
                        setEmail(e.target.value);
                    }}
                />
                <input
                    sx={AuthFormInputFieldStyles}
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => {
                        setError("");
                        setPassword(e.target.value);
                    }}
                />
                {!isLoginForm &&
                    <input
                        sx={AuthFormInputFieldStyles}
                        type="password"
                        placeholder="confirm password"
                        value={confirmedPassword}
                        onChange={(e) => {
                            setError("");
                            setConfirmedPassword(e.target.value);
                        }}
                    />
                }
                {error && <div sx={{ color: "salmon", fontSize: "0.9rem", fontFamily: "paragraph" }}>{error}</div>}
                <button type="submit" sx={AuthFormButtonStyles} disabled={loading}>{loading ? <BeatLoader margin={1} size={10} color={"#fff3c2c0"} /> : buttonText}</button>
            </form>
        </div>
    );
}
 
export default AuthForm;
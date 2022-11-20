import { LoginFormProps } from "../login-form/LoginForm";

const CreateAccountForm = ({ setShowLoginForm }: LoginFormProps) => {
    return (
        <div>
            <h1>Create account</h1>
            <div>Already have an account? <span onClick={() => setShowLoginForm(true)}>Log in!</span></div>
        </div>
    );
}
 
export default CreateAccountForm;
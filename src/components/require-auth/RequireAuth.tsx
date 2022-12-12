import { ThemeUIJSX } from '@theme-ui/core';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

interface IRequireAuthProps {
    children: ThemeUIJSX.Element;
    redirectTo: string;
}

const RequireAuth = ({ children, redirectTo }: IRequireAuthProps) => {
    const { currentUser } = useAuthContext();

    return currentUser ? children : <Navigate to={redirectTo} />;
}
 
export default RequireAuth;
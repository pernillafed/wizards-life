import { createUserWithEmailAndPassword, onAuthStateChanged, User, UserCredential } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export type AuthContextType = {
    currentUser: User | null;
    loading: boolean;
    createAccount: (email: string, password: string) => Promise<UserCredential>;
}

interface IAuthContextProps {
    children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

const useAuthContext = () => {
    if (AuthContext === null) {
        throw new Error("useAuthContext must be used within provider");
    }
    return useContext(AuthContext) as AuthContextType;
}

const AuthContextProvider = ({ children }: IAuthContextProps): JSX.Element => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const createAccount = (email: string, password: string): Promise<UserCredential> => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
    }, []);

    const values = {
        currentUser,
        loading,
        createAccount,
    };

    return (
        <AuthContext.Provider value={values}>
            {loading ? <p className="m-5 text-center">Loading...</p> : children}
        </AuthContext.Provider>
    );
};

export { useAuthContext, AuthContextProvider as default };
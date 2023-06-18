import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export type AuthContextType = {
  currentUser: User | null;
  loading: boolean;
  createAccount: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  login: (email: string, password: string) => Promise<UserCredential>;
};

interface IAuthContextProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

const useAuthContext = () => {
  if (AuthContext === null) {
    throw new Error("useAuthContext must be used within provider");
  }
  return useContext(AuthContext) as AuthContextType;
};

const AuthContextProvider = ({ children }: IAuthContextProps): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const createAccount = (email: string, password: string): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = (): Promise<void> => {
    return signOut(auth);
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
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={values}>
      {loading ? <p className="m-5 text-center">Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export { useAuthContext, AuthContextProvider as default };

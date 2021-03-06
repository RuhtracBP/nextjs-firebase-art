import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

interface AuthContextData {
    currentUser: string;
    signUp: ()=> string;
}

interface userData {
    email: string;
    password: string;
    prevState: null;
}

const AuthContext = React.createContext({} as AuthContextData);

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState();

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signUp()
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
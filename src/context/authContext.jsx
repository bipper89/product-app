import {createContext, useContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../environments/firebase";


export const authContext = createContext();
const localUser = JSON.parse(sessionStorage.getItem('user'));
export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
}

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({localUser});

    const signUp = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password);
    }

    const login = async (username, password) => {
        await signInWithEmailAndPassword(auth, username, password);
    }

    const logout = async () => {
        await signOut(auth);
        sessionStorage.removeItem('user');
    }



    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            sessionStorage.setItem('user', JSON.stringify(currentUser));
        });
    }, []);


    return (
        <authContext.Provider value={{signUp, login, user, logout}}>
            {children}
        </authContext.Provider>
    );
}

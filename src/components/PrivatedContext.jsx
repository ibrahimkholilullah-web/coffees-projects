import React, { createContext, useState } from 'react';
import { auth } from './firebase.confige';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
export  const AuthContext = createContext()
const PrivatedContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoader]= useState(true)
    const emailandPassword = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        user,
        loading,
        setUser,
        emailandPassword,
        signInUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default PrivatedContext;
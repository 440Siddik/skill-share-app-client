import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const googleProviderLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider)
  }

const logOut = () => {
  setLoading(true);
  return signOut(auth);
}

const createUser = (email, password) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password)
}

const signIn = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password)
}

const gitHubProvider = (gitProvider) =>{
  setLoading(true);
  return signInWithPopup(auth, gitProvider);
}

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      console.log('User state changed', currentUser);
      setUser(currentUser)
      setLoading(false)
    });
    return ()=>{
      unsubscribe()
    }
  },[])

  const authinfo = {
    user,
    googleProviderLogin,
    logOut,
    createUser,
    signIn,
    gitHubProvider,
    loading
  }; 
  return (
    <AuthContext.Provider value={authinfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
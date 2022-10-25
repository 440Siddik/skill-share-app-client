import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState();
  const googleProviderLogin = (provider) => {
    return signInWithPopup(auth, provider)
  }
const logOut = () => {
  return signOut(auth);
}
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      console.log('User state changed', currentUser);
      setUser(currentUser)
    });
    return ()=>{
      unsubscribe()
    }
  },[])

  const authinfo = { user, googleProviderLogin, logOut }; 
  return (
    <AuthContext.Provider value={authinfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
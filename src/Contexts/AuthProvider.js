import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import {getAuth, signInWithPopup} from 'firebase/auth'
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState();
  const googleProviderLogin = (provider) => {
    return signInWithPopup(auth, provider)
  }
  const authinfo = {user, googleProviderLogin} 
  return (
    <AuthContext.Provider value={authinfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
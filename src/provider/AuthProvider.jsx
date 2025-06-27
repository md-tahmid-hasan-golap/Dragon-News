import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (crueentUser) => {
      setUser(crueentUser);
    });
    return () => {
      unSubcribe();
    };
  }, []);
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userData = {
    user,
    setUser,
    creatUser,
  };
  return <AuthContext value={userData}>{children}</AuthContext>;
};

export default AuthProvider;

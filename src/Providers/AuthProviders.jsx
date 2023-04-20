import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSignOut = () => {
    return signOut(auth);
  };


 const createGoogleSingIn = () =>{
  return signInWithPopup(auth, googleProvider)
 }
 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const loggedIn = user;
      setUser(loggedIn);
      setLoading(false)
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    createUser,
    userSignIn,
    userSignOut,
    userName,
    setUserName,
    loading,
    createGoogleSingIn,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

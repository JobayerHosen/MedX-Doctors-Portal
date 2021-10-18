import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "@firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  //   GOOGLE SIGN IN
  const signInWithGoogle = () => {
    setIsLoading(true);
    const gAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, gAuthProvider)
      .then((result) => {
        setUser(result.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  //   GITHUB SIGN IN
  const signInWithGithub = () => {
    setIsLoading(true);
    const gitAuthProvider = new GithubAuthProvider();
    signInWithPopup(auth, gitAuthProvider)
      .then((result) => {
        setUser(result.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  //   EMAIN AND PASSWORD SIGN UP
  const createAccountWithEmailPassword = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  //   EMAIN AND PASSWORD LOGIN
  const logInWithEmailandPassword = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  //   LOG OUT
  const logOut = () => {
    signOut(auth).then(setUser(null));
  };

  //   GET CURRENT USER WITH AUTH OBSERVER
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
        setIsLoading(false);
        // ...
      } else {
        // User is signed out

        setIsLoading(false);
      }
    });
  }, []);

  return {
    user,
    error,
    setError,
    isLoading,
    signInWithGoogle,
    signInWithGithub,
    createAccountWithEmailPassword,
    logInWithEmailandPassword,
    logOut,
  };
};

export default useFirebase;

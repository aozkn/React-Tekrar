import React, { createContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";
export const AuthContext = createContext();

//* with custom hook
// export const useAuthCotext =() => {
//     return useContext(AuthContext)
// }

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    userObserver();
  }, []);

  let navigate = useNavigate();
  const createUser = async (email, password, displayName) => {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
      let userC = await createUserWithEmailAndPassword(auth, email, password);

      //? kullanici profilini guncellemek icin kullanilan firebase metodu
      await updateProfile(auth.currentUser, {

        //! key and value degerleri ayniysa sadece key degerini yazabiliriz
        displayName,
      });
      console.log(userC);
      navigate("/");
      toastSuccessNotify("Register Succesfully!");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Email/password
  //! Email/password ile girişi enable yap
  const signIn = async (email, password) => {
    try {
      //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
      let signInC = await signInWithEmailAndPassword(auth, email, password);
      console.log(signInC);
      navigate("/");
      toastSuccessNotify("Login Succesfully!");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const LogOut = () => {
    signOut(auth);
    toastSuccessNotify("Logout Succesfully!");
  };

  const userObserver = () => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
      } else {
        setCurrentUser(false);
        console.log("Logout");
      }
    });
  };

  const values = { createUser, signIn, LogOut, currentUser };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

import React, { createContext } from "react";
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext();

//* with custom hook
// export const useAuthCotext =() => {
//     return useContext(AuthContext)
// }

const AuthContextProvider = ({ children }) => {
  const createUser = async (email, password) => {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
      let userC = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userC);
    } catch (error) {
      console.log(error);
    }
  };
  const values = { createUser };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

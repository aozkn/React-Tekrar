// Auth Context

import { createContext, useState, useContext } from "react";

//! 1- Login Context'i olusuturuldu
const AuthContext = createContext();

//! 2-Sarmalayici (Provider) Component
const AuthContextProvider = ({ children }) => {
  // //! Local State
  const [user, setUser] = useState(false);

  const values = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

//! 3- consuming custom hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;

import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const { children } = props;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  /* To send context */
  const containValues = {
    isLoggedIn,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={containValues}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

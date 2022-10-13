import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const { children } = props;

  const [user, setUser] = useState();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setUser({
      id: "1",
      name: "robin",
      permissions: ["analyze"],
      roles: ["admin"],
    });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  /* To send context */
  const containValues = {
    isLoggedIn,
    user: user,
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

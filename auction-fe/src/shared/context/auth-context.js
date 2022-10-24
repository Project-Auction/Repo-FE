import { createContext, useCallback, useEffect, useState } from "react";

export const AuthContext = createContext();

  /* To store timeout expiration time */
  let logoutTimer;

const AuthProvider = (props) => {
  const { children } = props;

  const [user, setUser] = useState({});
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const handleLogin = useCallback((user, expirationDate) => {
    setUser(user);

    /* If we already stored expiration time ,
    => expiration date will not be create new time  */
    const tokenExpirationTime =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60); // 1h

    setTokenExpirationDate(tokenExpirationTime);

    localStorage.setItem(
      "userData",
      JSON.stringify({
        accountId: user.accountId,
        username: user.username,
        token: user.token,
        expiration: expirationDate.toIOString(),
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = useCallback(() => {
    setUser({});
    /* Because we have old expiration date -> we need to clear it */
    setTokenExpirationDate(null);
    localStorage.removeItem("userData");
  }, []);

  /* To send context */
  const containValues = {
    isLoggedIn: !!user.token,
    token: user.token,
    userId: user.accountId,
    username: user.username,
    roles: user.roles,
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

import { createContext, useMemo, useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [registedUsers, setRegistedUsers] = useLocalStorage(
    "registedUsers",
    []
  );
  const navigate = useNavigate();

  const login = data => {
    const user = registedUsers.find(u => u.userName === data.userName);
    if (!user) return;
    setUser(user);
    navigate("/", { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const signUp = data => {
    registedUsers.push(data);
    setRegistedUsers(registedUsers);
    navigate("/login", { replace: true });
  };

  const update = data => {
    const index = registedUsers.findIndex(u => u.userName === data.userName);
    if (index >= 0) {
      registedUsers[index].firstName = data.firstName;
      registedUsers[index].lastName = data.lastName;
      registedUsers[index].phone = data.phone;
      setUser(registedUsers[index]);
      setRegistedUsers(registedUsers);
    }
  };

  const isExisted = userName => {
    return registedUsers.some(user => user.userName === userName);
  };

  const isAuth = user => {
    console.log("user", user);
    return (
      registedUsers.length > 0 &&
      registedUsers.some(
        u => u.userName === user.userName && u.password === user.password
      )
    );
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      signUp,
      update,
      isAuth,
      isExisted,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

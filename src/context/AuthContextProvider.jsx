import { createContext, useContext, useState, useEffect } from "react";
import axios from "../axios";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = ({ children }) => {
  const [creds, setCreds] = useState();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    async function fetchCreds() {
      const res = await axios.get("/faster/creds");
      setCreds(res.data);
    }

    fetchCreds();
  }, []);

  function signup(username, email, password) {
    return axios.post("/faster/creds", {
      username: username,
      email: email,
      password: password,
    });
  }

  function checkIfUserExists(username, email) {
    return creds.some(
      (cred) => cred.username === username || cred.email === email
    );
  }

  function login(username, password) {}

  const values = { creds, signup, login, setCurrentUser, checkIfUserExists };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

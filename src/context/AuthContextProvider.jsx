import { createContext, useContext, useState, useEffect } from "react";
import axios from "../axios";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = ({ children }) => {
  const [creds, setCreds] = useState();

  useEffect(() => {
    async function fetchCreds() {
      const req = await axios.get("/faster/creds");
      setCreds(req.data);
    }

    fetchCreds();
  }, []);
  const values = { creds };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

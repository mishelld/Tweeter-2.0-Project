import { createContext, useState } from "react";
export const UserContext = createContext();
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

function ContextProvider({ children }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("Bob");
  const [user, setUser] = useState(null);

  function onUpdateUsername(name) {
    setUsername(name);
  }
  const handleLogin = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return;
    setUser(data.user);
    setUsername(email);
    navigate("/Tweeter-2.0-Project/home");
  };
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return;
    }
    navigate("/Tweeter-2.0-Project/");
  };
  return (
    <>
      <UserContext.Provider
        value={{ username, onUpdateUsername, handleLogout, handleLogin }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}

export default ContextProvider;

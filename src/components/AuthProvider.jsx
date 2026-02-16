import { createContext, useState, useEffect } from "react";
export const UserContext = createContext();
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { em } from "@mantine/core";

function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("Bob");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      setLoading(true);
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setUser(session?.user ?? null);

        if (!session?.user) {
          //   navigate("/Tweeter-2.0-Project/", { replace: true });
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, [navigate]);

  function onUpdateUsername(name) {
    setUsername(name);
  }
  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
        return;
      }
      setUser(data.user);
      setUsername(email);
      navigate("/Tweeter-2.0-Project/home");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        setError(error.message);
        return;
      }
      navigate("/Tweeter-2.0-Project/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleSignup = async (email, password) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        setError(error.message);
        console.log(error);
        return;
      }
      setUser(data.user);
      setUsername(email);
      navigate("/Tweeter-2.0-Project/home");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <UserContext.Provider
        value={{
          username,
          onUpdateUsername,
          handleLogout,
          handleLogin,
          handleSignup,
          error,
          loading,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}

export default AuthProvider;

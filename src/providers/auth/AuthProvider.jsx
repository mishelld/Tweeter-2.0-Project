import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../components/supabaseClient";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("Bob");
  const [user, setUser] = useState(
    localStorage.activeUser ? JSON.parse(localStorage.activeUser) : null,
  );
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("activeUser", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    const checkSession = async () => {
      setLoading(true);
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
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
      <AuthContext.Provider
        value={{
          user,
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
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;

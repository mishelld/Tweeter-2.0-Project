import { createContext, useState } from "react";
export const UserContext = createContext();
function ContextProvider({ children }) {
  const [username, setUsername] = useState("Bob");

  function onUpdateUsername(name) {
    setUsername(name);
  }
  return (
    <>
      <UserContext.Provider value={{ username, onUpdateUsername }}>
        {children}
      </UserContext.Provider>
    </>
  );
}

export default ContextProvider;

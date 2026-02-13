import "./App.css";
import Tweeter from "./pages/Tweeter";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import UserPage from "./pages/UserPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("Bob");
  function handleUpdateUsername(name) {
    setUsername(name);
  }
  return (
    <>
      <MantineProvider>
        <BrowserRouter>
          <Navbar />
          <div style={{ paddingTop: "60px" }}>
            <Routes>
              <Route path="/" element={<Tweeter username={username} />} />
              <Route
                path="/user/:id"
                element={
                  <UserPage
                    username={username}
                    onUpdateUsername={handleUpdateUsername}
                  />
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </MantineProvider>
    </>
  );
}

export default App;

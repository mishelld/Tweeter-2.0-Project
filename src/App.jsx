import "./App.css";
import Tweeter from "./pages/Tweeter";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import UserPage from "./pages/UserPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import ContextProvider from "./components/ContextProvider";
import TweetProvider from "./components/TweetProvider";

function App() {
  return (
    <>
      <MantineProvider>
        <ContextProvider>
          <TweetProvider>
            <BrowserRouter>
              <Navbar />
              <div style={{ paddingTop: "60px" }}>
                <Routes>
                  <Route path="/Tweeter-2.0-Project/" element={<Tweeter />} />
                  <Route
                    path="/Tweeter-2.0-Project/user/:id"
                    element={<UserPage />}
                  />
                </Routes>
              </div>
            </BrowserRouter>
          </TweetProvider>
        </ContextProvider>
      </MantineProvider>
    </>
  );
}

export default App;

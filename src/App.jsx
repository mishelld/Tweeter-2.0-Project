import "./App.css";
import Tweeter from "./pages/Tweeter";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import UserPage from "./pages/UserPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import ContextProvider from "./components/ContextProvider";

function App() {
  return (
    <>
      <MantineProvider>
        <ContextProvider>
          <BrowserRouter>
            <Navbar />
            <div style={{ paddingTop: "60px" }}>
              <Routes>
                <Route path="/" element={<Tweeter />} />
                <Route path="/user/:id" element={<UserPage />} />
              </Routes>
            </div>
          </BrowserRouter>
        </ContextProvider>
      </MantineProvider>
    </>
  );
}

export default App;

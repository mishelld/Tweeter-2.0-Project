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
import LoginPage from "./pages/LoginPage";
import MainLayout from "./pages/MainLayout";

function App() {
  return (
    <>
      <MantineProvider>
        <BrowserRouter>
          <ContextProvider>
            <TweetProvider>
              <Routes>
                <Route path="/Tweeter-2.0-Project/" element={<LoginPage />} />
                <Route
                  path="/Tweeter-2.0-Project/home"
                  element={
                    <MainLayout>
                      <Tweeter />
                    </MainLayout>
                  }
                />
                <Route
                  path="/Tweeter-2.0-Project/user/:id"
                  element={
                    <MainLayout>
                      <UserPage />
                    </MainLayout>
                  }
                />
              </Routes>
            </TweetProvider>
          </ContextProvider>
        </BrowserRouter>
      </MantineProvider>
    </>
  );
}

export default App;

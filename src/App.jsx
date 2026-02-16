import "./App.css";
import Tweeter from "./pages/Tweeter";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import UserPage from "./pages/UserPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import AuthProvider from "./components/AuthProvider";
import TweetProvider from "./components/TweetProvider";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./pages/MainLayout";
import HeroPage from "./pages/HeroPage";
import LoadingPage from "./pages/LoadingPage";
import ErrorPage from "./pages/ErrorPage";
import { UserContext } from "./components/AuthProvider";
import { TweetContext } from "./components/TweetProvider";
import SignupPage from "./pages/SignupPage";
function AppContent() {
  // const { loading: userLoading, error: userError } = useContext(UserContext);
  // const { loading: tweetsLoading, error: tweetsError } =
  //   useContext(TweetContext);

  // if (userLoading) return <LoadingPage />;
  // if (userError) return <ErrorPage message={userError} />;
  // if (tweetsLoading) return <LoadingPage />;
  // if (tweetsError) return <ErrorPage message={tweetsError} />;

  return (
    <Routes>
      <Route path="/Tweeter-2.0-Project/" element={<HeroPage />} />
      <Route path="/Tweeter-2.0-Project/login" element={<LoginPage />} />
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
      <Route path="/Tweeter-2.0-Project/signup" element={<SignupPage />} />
    </Routes>
  );
}
function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <AuthProvider>
          <TweetProvider>
            <AppContent />
          </TweetProvider>
        </AuthProvider>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;

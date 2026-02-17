import "./App.css";
import Tweeter from "./components/Tweeter";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import UserPage from "./pages/UserPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./providers/auth/AuthProvider";
import TweetProvider from "./providers/TweetProvider";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./pages/MainLayout";
import HeroPage from "./pages/HeroPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoute from "./providers/auth/ProtectedRoute";
const BASE_PATH = "/Tweeter-2.0-Project";

function withLayoutAndProvider(Component) {
  return (
    <TweetProvider>
      <MainLayout>
        <Component />
      </MainLayout>
    </TweetProvider>
  );
}

function AppContent() {
  return (
    <Routes>
      <Route path={`${BASE_PATH}/`} element={<HeroPage />} />
      <Route path={`${BASE_PATH}/login`} element={<LoginPage />} />
      <Route
        path={`${BASE_PATH}/home`}
        element={
          <ProtectedRoute>{withLayoutAndProvider(Tweeter)}</ProtectedRoute>
        }
      />
      <Route
        path={`${BASE_PATH}/user/:id`}
        element={
          <ProtectedRoute>{withLayoutAndProvider(UserPage)}</ProtectedRoute>
        }
      />
      <Route path={`${BASE_PATH}/signup`} element={<SignupPage />} />
    </Routes>
  );
}
function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;

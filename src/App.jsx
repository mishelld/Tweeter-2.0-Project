import "./App.css";
import Tweeter from "./pages/Tweeter";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import UserPage from "./pages/UserPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import ContextProvider from "./components/ContextProvider";
import TweetProvider from "./components/TweetProvider";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./pages/MainLayout";
import LoadingPage from "./pages/LoadingPage";
import ErrorPage from "./pages/ErrorPage";
import { UserContext } from "./components/ContextProvider";
import { TweetContext } from "./components/TweetProvider";

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
  );
}
function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <ContextProvider>
          <TweetProvider>
            <AppContent />
          </TweetProvider>
        </ContextProvider>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;

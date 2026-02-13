import "./App.css";
import Tweeter from "./pages/Tweeter";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <>
      <MantineProvider>
        <Tweeter />
        {/* <UserPage /> */}
      </MantineProvider>
    </>
  );
}

export default App;

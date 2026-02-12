import "./App.css";
import Tweeter from "./pages/Tweeter";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <>
      <MantineProvider>
        <Tweeter />
      </MantineProvider>
    </>
  );
}

export default App;

import Content from "./components/Content";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <Content />
    </WeatherProvider>
  );
}

export default App;

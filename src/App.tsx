import "./App.css";
import { ThemeProvider, useTheme } from "./components/theme-provider";
import Routes from "./Routes";

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider defaultTheme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;

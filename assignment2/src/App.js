import "./App.css";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

export default App;

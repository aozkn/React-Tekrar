import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/Global.styles";
function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyles/>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;

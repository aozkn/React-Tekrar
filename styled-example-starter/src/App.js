import Header from "./components/Header";
import Container from "./components/styled/Container";
import { GlobalStyles } from "./components/styled/Global.styled";
import Nav from "./components/Nav";

import { ThemeProvider } from "styled-components";
const App = () => {
  const styles = {
    colors: {
      primary: "#bebe",
      secondary: "#bebe",
    },
    breakpoints: { xs: "300px", sm: "500px", md: "700px" },
    margin: {},
    padding: {},
  };

  return (
    <ThemeProvider theme={styles}>
      <GlobalStyles />
      <Nav />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
};

export default App;

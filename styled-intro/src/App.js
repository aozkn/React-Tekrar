import { Button, DarkButton } from "./components/Button.styled";
import Flex from "./components/Flex.styled";

function App() {
  return (
    <>
      <Flex bg="purple">
        <h1>Styled-Components</h1>
        <Button>Click On</Button>
        <DarkButton>Dark Button</DarkButton>
      </Flex>
      <Flex bg="green">
        <h1>Props</h1>
      </Flex>
    </>
  );
}

export default App;

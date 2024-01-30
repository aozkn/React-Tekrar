import { Button, DarkButton, OutlinedButton } from "./components/Button.styled";
import Flex from "./components/Flex.styled";
import StyledLink from "./components/Links.styled";
import Title from "./components/Title.styled";

function App() {
  return (
    <>
      <Flex bg="purple">
        <Title color="white" bgcolor="red">
          Styled-Components
        </Title>
        <Button>Click On</Button>
        <DarkButton>Dark Button</DarkButton>
      </Flex>
      <Title color="purple">FlexBox</Title>
      <Title bgcolor="green">FlexBox</Title>
      <Flex bg="green">
        <h1>Props</h1>
      </Flex>
      <Flex>
        <OutlinedButton primary>OutLinedButton</OutlinedButton>
        <OutlinedButton>OutLinedButton</OutlinedButton>
      </Flex>
      <Flex>
        <StyledLink href="https://www.clarusway.com">Clarusway</StyledLink>
        <StyledLink react href="https://www.react.dev">
          React
        </StyledLink>
      </Flex>
    </>
  );
}

export default App;

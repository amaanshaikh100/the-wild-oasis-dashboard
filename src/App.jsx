import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: yellow;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />

      <StyledApp>
        <H1>Hello world</H1>
        <Button>Click me</Button>

        <Input type="text" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;

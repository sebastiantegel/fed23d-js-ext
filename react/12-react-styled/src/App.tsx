import "./App.css";
import { AddTodo } from "./components/AddTodo";
import {
  Button,
  MagicButton,
  SecondaryButton,
} from "./components/styled/Buttons";
import { P } from "./components/styled/P";
import { Title } from "./components/styled/Title";
import { Wrapper } from "./components/styled/Wrappers";

function App() {
  return (
    <>
      <Wrapper>
        <Title>Hello world!</Title>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          soluta corrupti sapiente aliquam possimus necessitatibus temporibus
          repellendus totam cumque ipsa nihil recusandae, delectus perferendis
          facilis quas minima quod? Soluta, vitae.
        </P>
        <Button>Spara</Button>
        <SecondaryButton>Den andra</SecondaryButton>
        <MagicButton background="red" color="yellow" hoverColor="purple">
          Magi
        </MagicButton>
      </Wrapper>

      <AddTodo></AddTodo>
    </>
  );
}

export default App;

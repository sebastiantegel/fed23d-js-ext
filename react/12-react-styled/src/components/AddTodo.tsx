import { FormEvent, useState } from "react";
import { Button } from "./styled/Buttons";
import { Input } from "./styled/Inputs";
import { Form } from "./styled/Form";
import { Wrapper } from "./styled/Wrappers";

export const AddTodo = () => {
  const [userInput, setUserInput] = useState("");

  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    // Spara min todo
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSave}>
        <Input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button>Spara</Button>
      </Form>
    </Wrapper>
  );
};

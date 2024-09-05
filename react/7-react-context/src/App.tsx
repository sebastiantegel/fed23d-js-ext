import { useState } from "react";
import "./App.css";
import { Parent } from "./components/Parent";
import { MyContext } from "./contexts/MyContext";

function App() {
  const [text, setText] = useState("Hello world!");

  const changeText = (nt: string) => {
    // Logik för att kontrollera, ändra eller gör någonting innan vi ändrar state
    setText(nt);
  };

  return (
    <>
      <MyContext.Provider value={{ text, changeText }}>
        <Parent />
      </MyContext.Provider>
    </>
  );
}

export default App;

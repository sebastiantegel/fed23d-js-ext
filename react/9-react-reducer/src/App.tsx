import { useReducer } from "react";
import "./App.css";
import { StringReducer } from "./reducers/StringReducer";
import { TodoApp } from "./components/TodoApp";

function App() {
  // const [userInput, setUserInput] = useState("");
  // const [userInput, dispatch] = useReducer(StringReducer, "");
  // return (
  //   <form>
  //     <input
  //       type="text"
  //       value={userInput}
  //       onChange={(e) => dispatch({ type: "TYPED", payload: e.target.value })}
  //     />
  //   </form>
  // );

  return <TodoApp></TodoApp>;
}

export default App;

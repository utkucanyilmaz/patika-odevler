import { useState, useEffect } from "react";
import Input from "./components/Input";

function App() {
  const [todos, setTodos] = useState([
    {
      done: true,
      text: "Taste JavaScript",
    },
    {
      text: "Code furiously",
      done: true,
    },
    {
      text: "Promote Mavo",
      done: false,
    },
  ]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-titleColor text-center font-medium text-8xl">
        todos
      </h1>
      <Input todos={todos} addTodo={setTodos} />
      {todos.map((todo, key) => {
        return (
          <div
            className={todo.done ? "text-green-500" : "text-red-500"}
            key={key}
          >
            {todo.text}
          </div>
        );
      })}
    </div>
  );
}

export default App;

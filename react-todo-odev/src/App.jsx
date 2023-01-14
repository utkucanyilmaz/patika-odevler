import { useState, useEffect } from "react";
import Input from "./components/Input";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      text: "Taste JavaScript",
      done: true,
    },
    {
      id: "2",
      text: "Code furiously",
      done: true,
    },
    {
      id: "3",
      text: "Promote Mavo",
      done: false,
    },
  ]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="min-w-[600px]">
        <h1 className="text-titleColor text-center font-medium text-8xl">
          todos
        </h1>
        <div className="w-full mt-6">
          <Input todos={todos} setTodos={setTodos} />
          <div className="flex flex-col gap-y-[1px] mt-[1px] w-full">
            {todos.map(todo => {
              return (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  todos={todos}
                  setTodos={setTodos}
                  text={todo.text}
                  done={todo.done}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

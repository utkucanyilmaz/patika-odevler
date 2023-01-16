import { useState, useEffect } from "react";
import Input from "./components/Input";
import Todos from "./components/Todos";
import Filters from "./components/Filters";

function App() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });
  const [show, setShow] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const completedTodos = todos.filter(todo => todo.done);
  const activeTodos = todos.filter(todo => !todo.done);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="min-w-[550px]">
        <h1 className="text-titleColor text-center font-medium text-8xl">
          todos
        </h1>
        <div className="w-full mt-6 shadow-xl">
          <Input todos={todos} setTodos={setTodos} />
          <Todos
            show={show}
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            activeTodos={activeTodos}
          />
          {todos.length > 0 && (
            <Filters
              setTodos={setTodos}
              activeTodos={activeTodos}
              show={show}
              setShow={setShow}
              completedTodos={completedTodos}
            />
          )}
        </div>
        {todos.length > 0 && (
          <>
            <div className="h-1 w-[calc(100%-6px)] mx-auto border border-t-0 border-gray-300 bg-white"></div>
            <div className="h-1 w-[calc(100%-12px)] mx-auto border border-t-0 border-gray-300 bg-white"></div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

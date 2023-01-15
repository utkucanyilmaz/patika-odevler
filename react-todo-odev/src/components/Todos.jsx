import React from "react";
import Todo from "./Todo";

function Todos({ todos, setTodos, show, completedTodos, activeTodos }) {
  const changeShownItems = () => {
    if (show === "all") {
      return todos;
    } else if (show === "completed") {
      return completedTodos;
    } else if (show === "active") {
      return activeTodos;
    }
  };

  const shownItems = changeShownItems();

  return (
    <div className="flex flex-col mt-[2px] w-full">
      {shownItems.map(todo => {
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
  );
}

export default Todos;

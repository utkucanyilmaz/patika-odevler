import React from "react";
import { FaTimes } from "react-icons/fa";

function Todo({ text, done, todos, setTodos, id }) {
  const handleChange = e => {};
  const handleRemove = id => {
    const filtered = todos.filter(item => item.id != id);
    setTodos(filtered);
  };
  return (
    <div className="bg-white p-4 shadow-xl flex items-center justify-between gap-x-4 group">
      <div className="flex items-center  gap-x-4">
        <input
          className="w-[2rem] h-[2rem] "
          type="checkbox"
          onChange={handleChange}
          name=""
          id=""
        />
        <span
          className={`text-2xl text-gray-600  ${
            done ? "line-through text-opacity-20" : ""
          }
        `}
        >
          {text}
        </span>
      </div>

      <div>
        <button onClick={() => handleRemove(id)}>
          <FaTimes className="hidden group-hover:inline text-opacity-40 text-cross hover:text-opacity-100 transition-all" />
        </button>
      </div>
    </div>
  );
}

export default Todo;

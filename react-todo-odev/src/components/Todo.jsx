import React from "react";
import { FaTimes } from "react-icons/fa";

function Todo({ text, done, todos, setTodos, id }) {
  const handleTextInputChange = e => {
    const result = todos.map(item =>
      item.id === id ? { ...item, text: e.target.value } : item
    );

    setTodos(result);
  };

  const handleChange = e => {
    const result = todos.map(item =>
      item.id === id ? { ...item, done: !done } : item
    );

    setTodos(result);
  };

  const handleRemove = id => {
    const filtered = todos.filter(item => item.id != id);
    setTodos(filtered);
    console.log(filtered);
  };

  return (
    <div className="bg-white p-4 flex items-center border-b-[1px] border-gray-200  justify-between gap-x-4 group">
      <div className="flex items-center w-full  gap-x-4">
        <input
          className="w-[2rem] h-[2rem] cursor-pointer "
          type="checkbox"
          checked={done}
          onChange={handleChange}
          id=""
        />

        <input
          className={`text-2xl text-gray-600 transition-all w-full placeholder:text-gray-600 placeholder:text-opacity-20 placeholder:italic focus:outline focus:outline-1 focus:outline-slate-400 focus:shadow-lg  ${
            done ? "line-through text-opacity-20" : ""
          }
        `}
          placeholder="(Text)"
          type="text"
          value={text}
          onChange={handleTextInputChange}
        />
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

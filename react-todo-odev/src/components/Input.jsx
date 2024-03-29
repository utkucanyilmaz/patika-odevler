import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const initialFormValues = {
  id: null,
  text: "",
  done: false,
};

function Input({ todos, setTodos }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [todos]);

  const onInputChange = e => {
    setForm({ ...form, id: uuidv4(), [e.target.name]: e.target.value });
  };

  const handleAllChecked = () => {
    const checked = todos.map(todo => {
      if (todos.some(todo => todo.done === false)) {
        return { ...todo, done: true };
      } else {
        return { ...todo, done: false };
      }
    });

    setTodos(checked);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (form.text === "") {
      return;
    }
    setTodos([...todos, form]);
  };

  return (
    <div className="flex bg-white p-4 gap-x-4 w-full">
      {todos.length > 0 ? (
        <button onClick={handleAllChecked}>
          <FiChevronDown
            className={`transition-colors 
              ${
                todos.every(todo => todo.done)
                  ? "text-gray-600"
                  : "text-gray-200"
              }`}
            size={"2rem"}
          />
        </button>
      ) : (
        <div className="w-9"></div>
      )}

      <form className="w-full" onSubmit={onSubmit}>
        <input
          className="text-2xl text-gray-600 placeholder:text-gray-200 placeholder:italic focus:outline-none w-full"
          name="text"
          value={form.text}
          onChange={onInputChange}
          type="text"
          placeholder="What needs to be done?"
        />
      </form>
    </div>
  );
}

export default Input;

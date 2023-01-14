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
    todos.map(todo => {
      console.log({});
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (form.text === "") {
      return;
    }
    setTodos([...todos, form]);
  };

  return (
    <div className="flex bg-white py-4 pl-2 pr-4 gap-x-4 shadow-lg w-full">
      {todos.length > 0 ? (
        <button onClick={handleAllChecked}>
          <FiChevronDown className="text-gray-200" size={"2rem"} />
        </button>
      ) : (
        <div className="w-8"></div>
      )}

      <form onSubmit={onSubmit}>
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

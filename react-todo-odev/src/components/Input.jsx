import { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
const initialFormValues = {
  text: "",
  done: false,
};

function Input({ todos, addTodo }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [todos]);

  const onInputChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (form.text === "") {
      return;
    }
    addTodo([...todos, form]);
  };

  return (
    <div className="flex bg-white py-4 pl-2 pr-4 gap-x-4">
      <button>
        {/* ToDo - Butona basıldığında bütün todo itemlar completed olarak işaretlenecek */}
        <FiChevronDown className="text-gray-200" size={"2rem"} />
      </button>

      <form onSubmit={onSubmit}>
        <input
          className="text-2xl text-gray-600 placeholder:text-gray-200 placeholder:italic focus:outline-none"
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

import React from "react";

function Filters({ activeTodos, completedTodos, setShow, setTodos, show }) {
  const handleClearCompleted = () => {
    setTodos(activeTodos);
  };

  return (
    <div className="bg-white flex item-center justify-between py-2 px-4 text-gray-500 border-b border-gray-200 text-sm">
      <p className="flex items-center">
        {activeTodos.length === 1
          ? `${activeTodos.length} item left`
          : `${activeTodos.length} items left`}
      </p>
      <div className="flex gap-x-3">
        <button
          className={`px-[7px] py-[3px] flex items-center ${
            show === "all" ? "border border-gray-300 rounded-md" : ""
          }`}
          onClick={() => {
            setShow("all");
          }}
        >
          All
        </button>
        <button
          className={`px-[7px] py-[3px] flex items-center ${
            show === "active" ? "border border-gray-300 rounded-md" : ""
          }`}
          onClick={() => {
            setShow("active");
          }}
        >
          Active
        </button>
        <button
          className={`px-[7px] py-[3px] flex items-center ${
            show === "completed" ? "border border-gray-300 rounded-md" : ""
          }`}
          onClick={() => {
            setShow("completed");
          }}
        >
          Completed
        </button>
      </div>
      <div className="flex items-center">
        <button
          className={`hover:underline transition-opacity ${
            completedTodos.length === 0 ? "opacity-0" : "opacity-100"
          }`}
          onClick={handleClearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default Filters;

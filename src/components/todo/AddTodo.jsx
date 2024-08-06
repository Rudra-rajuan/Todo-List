import { useState } from "react";
import PropTypes from "prop-types";

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

function AddTodo({ onAddTodo }) {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() !== "") {
      onAddTodo(todoText);
      setTodoText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;

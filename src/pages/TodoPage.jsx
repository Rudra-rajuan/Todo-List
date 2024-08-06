import { useState } from "react";
import AddTodo from "../components/todo/AddTodo";

function TodoPage() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      {/* ... other todo list components */}
    </div>
  );
}

export default TodoPage;

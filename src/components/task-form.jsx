import React, { useState, useRef } from "react";
import { generateId } from "../utils/string";
import useLocalStorage from "../hooks/use-local-storage";

function TaskForm({ onSubmit }) {
  const [title, setTitle] = useLocalStorage("taskTitle", "");
  const [error, setError] = useState("");
  const ref = useRef();

  const handleInput = (event) => {
    const newText = event.target.value;
    setTitle(newText);
    if (error && newText) {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) {
      setError("Your task title cannot be empty");
    } else {
      onSubmit({
        id: generateId(),
        title,
        completed: false,
      });
      setTitle("");
      setError("");
    }
    ref.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={ref}
        placeholder="Task title"
        type="text"
        value={title}
        onChange={handleInput}
      />
      <button type="submit">Add</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default TaskForm;

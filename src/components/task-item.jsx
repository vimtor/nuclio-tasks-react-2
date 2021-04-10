import React from "react";

function TaskItem({ id, title, completed, onClick, onRemove }) {
  return (
    <li>
      <span
        onClick={() => onClick(id)}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {title}
      </span>
      <button onClick={() => onRemove(id)}>X</button>
    </li>
  );
}

export default TaskItem;

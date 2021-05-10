import React, { useEffect, useState } from "react";
import useDocumentTitle from "../hooks/use-document-title";
import TaskForm from "../components/task-form";
import TaskList from "../components/task-list";
import TaskItem from "../components/task-item";
import useNotifications from "../hooks/use-notifications";
import { generateId } from "../utils/string";
import { postTask } from "../utils/api";

function TaskListPage() {
  const [tasks, setTasks] = useState([]);
  const { createNotification } = useNotifications();

  const pendingTasksCount = tasks.filter((task) => !task.completed).length;
  const completedTasksCount = tasks.length - pendingTasksCount;

  useEffect(() => {
    fetch("http://localhost:3001/task")
      .then((response) => response.json())
      .then(setTasks);
  }, []);

  useEffect(() => {
    if (pendingTasksCount === 0) {
      createNotification("You completed all tasks");
    }
  }, [pendingTasksCount]);

  useDocumentTitle(`${pendingTasksCount} tasks left`);

  const createTask = async (task) => {
    try {
      const response = await postTask(task);
      if (response.status < 400 && response.status < 500) {
        setTasks([...tasks, task]);
      }
    } catch {
      setTasks(tasks);
      createNotification("Could not create task");
    }
  };

  const removeTask = async (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const completeTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const clearCompleted = () => {
    const newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
  };

  return (
    <div>
      <p>Pending tasks: {pendingTasksCount}</p>
      <TaskForm onSubmit={createTask} />
      <TaskList>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
            onClick={completeTask}
            onRemove={removeTask}
          />
        ))}
      </TaskList>
      {completedTasksCount > 0 && (
        <button onClick={clearCompleted}>Clear completed tasks</button>
      )}
    </div>
  );
}

export default TaskListPage;

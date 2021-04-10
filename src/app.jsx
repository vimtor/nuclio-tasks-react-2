import React, { useEffect } from "react";
import TaskForm from "./components/task-form";
import TaskList from "./components/task-list";
import TaskItem from "./components/task-item";
import useLocalStorage from "./hooks/use-local-storage";
import useDocumentTitle from "./hooks/use-document-title";

function App() {
  const [tasks, setTasks] = useLocalStorage("storedTasks", []);

  const pendingTasksCount = tasks.filter((task) => !task.completed).length;
  const completedTasksCount = tasks.length - pendingTasksCount;

  useEffect(() => {
    if (pendingTasksCount === 0) {
      alert("You don't have any tasks to do");
    }
  }, []);

  useDocumentTitle(`${pendingTasksCount} tasks left`);

  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id) => {
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
      <h1>Todo List</h1>
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

export default App;

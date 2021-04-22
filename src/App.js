import { useState, useEffect } from "react";

import AddTask from "./Components/AddTask/AddTask";

import TaskList from "./Components/TaskList/TaskList";
import Filters from "./Components/Filters/Filters";

import classes from "./App.module.scss";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (window.localStorage["task-list"]) {
      setTasks(JSON.parse(window.localStorage.getItem("task-list")));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("task-list", JSON.stringify(tasks));
  }, [tasks]);

  const userInputHandler = (taskItem) => {
    setTasks([...tasks, taskItem]);
  };

  const deleteTaskHandler = (taskID) => {
    const filteredArray = tasks.filter((task) => task.id !== taskID);
    setTasks(filteredArray);
  };

  return (
    <div className={classes.App}>
      <AddTask userInputHandler={userInputHandler} />
      <TaskList tasks={tasks} deleteTaskHandler={deleteTaskHandler} />
      <Filters />
    </div>
  );
};

export default App;

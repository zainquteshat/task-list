import { useState, useEffect } from "react";

import AddTask from "./Components/AddTask/AddTask";

import TaskList from "./Components/TaskList/TaskList";
import Filters from "./Components/Filters/Filters";

import classes from "./App.module.scss";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedFilterType, setSelectedFilterType] = useState("all");

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

  const markCompletedHandler = (taskId) => {
    const completedTask = tasks.filter((task) => task.id === taskId)[0];
    completedTask.completed = true;
    setTasks([...tasks]);
  };

  const filterSelectedHandler = (filterType) => {
    setSelectedFilterType(filterType);
  };

  return (
    <div className={classes.App}>
      <AddTask userInputHandler={userInputHandler} />
      <TaskList
        tasks={tasks}
        deleteTaskHandler={deleteTaskHandler}
        markCompletedHandler={markCompletedHandler}
        selectedFilterType={selectedFilterType}
      />
      <Filters
        filterSelectedHandler={filterSelectedHandler}
        selectedFilterType={selectedFilterType}
      />
    </div>
  );
};

export default App;

import TasksContext from "./TaskContext";
import { useState, useEffect } from "react";

//Provider
const TasksContextProvider = (props) => {
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

  const taskCtx = {
    tasks: tasks,
    userInputHandler: userInputHandler,
    deleteTaskHandler: deleteTaskHandler,
    markCompletedHandler: markCompletedHandler,
    filterSelectedHandler: filterSelectedHandler,
    selectedFilterType: selectedFilterType,
  };

  return (
    <TasksContext.Provider value={taskCtx}>
      {props.children}
    </TasksContext.Provider>
  );
};
export default TasksContextProvider;

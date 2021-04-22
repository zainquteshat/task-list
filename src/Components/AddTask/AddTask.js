import { useState } from "react";
import classes from "./AddTask.module.scss";

const AddItem = ({ userInputHandler }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const inputCangeHandler = (event) => {
    setTaskTitle(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (taskTitle.trim("")) {
      const uniqueID = new Date().getTime();
      const taskItem = {
        id: uniqueID,
        title: taskTitle,
        completed: false,
      };
      userInputHandler(taskItem);
      setTaskTitle("");
    }
  };
  return (
    <div className={classes.AddTask}>
      <form onSubmit={submitHandler}>
        <input
          placeholder="What needs to be done?"
          className={classes.taskInput}
          onChange={inputCangeHandler}
          value={taskTitle}
        />
      </form>
    </div>
  );
};
export default AddItem;

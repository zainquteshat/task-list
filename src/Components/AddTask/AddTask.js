import { useState } from "react";
import classes from "./AddTask.module.scss";

const AddItem = ({ userInputHandler, selectedFilterType }) => {
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
  const isCompletedFilterTypeSelected = selectedFilterType === "completed";
  return (
    <div className={classes.AddTask}>
      <form onSubmit={submitHandler}>
        <input
          placeholder="What needs to be done?"
          className={classes.taskInput}
          onChange={inputCangeHandler}
          value={taskTitle}
          title={
            isCompletedFilterTypeSelected
              ? "You cannot add items when Completed filter is selected"
              : ""
          }
          disabled={isCompletedFilterTypeSelected ? true : false}
        />
      </form>
    </div>
  );
};
export default AddItem;

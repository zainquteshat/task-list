import { useContext } from "react";
import TaskContext from "../../Store/TaskContext";

import classes from "./TaskList.module.scss";
import Task from "./Task/Task";

const TaskList = () => {
  const taskCtx = useContext(TaskContext);

  const filteredTasks = () => {
    switch (taskCtx.selectedFilterType) {
      case "open":
        return taskCtx.tasks.filter((task) => !task.completed);
      case "completed":
        return taskCtx.tasks.filter((task) => task.completed);
      default:
        return taskCtx.tasks;
    }
  };

  const renderTasks = () => {
    if (taskCtx.tasks.length > 0) {
      return (
        <ul>
          {filteredTasks().map(({ title, id, completed }) => {
            return (
              <Task taskTitle={title} key={id} id={id} completed={completed} />
            );
          })}
        </ul>
      );
    }
    return <p>No Tasks</p>;
  };
  return <div className={classes.TaskList}>{renderTasks()}</div>;
};
export default TaskList;

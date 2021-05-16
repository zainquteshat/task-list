import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import classes from "./Task.module.scss";
import TaskContext from "../../../Store/TaskContext";
import { useContext } from "react";

const Task = ({ taskTitle, id, completed }) => {
  const taskCtx = useContext(TaskContext);
  return (
    <li className={classes.Task}>
      <CheckCircleOutlineIcon
        className={[classes.Icon, completed ? classes.Green : ""].join(" ")}
        onClick={() => taskCtx.markCompletedHandler(id)}
      />
      <p className={classes.TaskTitle}>{taskTitle}</p>
      <DeleteOutlineIcon
        className={[classes.Icon, classes.Red].join(" ")}
        onClick={() => taskCtx.deleteTaskHandler(id)}
      />
    </li>
  );
};
export default Task;

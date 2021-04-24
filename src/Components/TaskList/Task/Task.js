import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import classes from "./Task.module.scss";

const Task = ({
  taskTitle,
  deleteTaskHandler,
  id,
  completed,
  markCompletedHandler,
}) => {
  return (
    <li className={classes.Task}>
      <CheckCircleOutlineIcon
        className={[classes.Icon, completed ? classes.Green : ""].join(" ")}
        onClick={() => markCompletedHandler(id)}
      />
      <p className={classes.TaskTitle}>{taskTitle}</p>
      <DeleteOutlineIcon
        className={[classes.Icon, classes.Red].join(" ")}
        onClick={() => deleteTaskHandler(id)}
      />
    </li>
  );
};
export default Task;

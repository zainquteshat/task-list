import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import classes from "./Task.module.scss";

const Task = ({ taskTitle, deleteTaskHandler, id, completed }) => {
  return (
    <li className={classes.Task}>
      <CheckCircleOutlineIcon />
      <p className={classes.TaskTitle}>{taskTitle}</p>
      <DeleteOutlineIcon onClick={() => deleteTaskHandler(id)} />
    </li>
  );
};
export default Task;

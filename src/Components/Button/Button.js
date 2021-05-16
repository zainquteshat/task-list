import classes from "./Button.module.scss";
import TaskContext from "../../Store/TaskContext";
import { useContext } from "react";
const Button = ({ title, filterType }) => {
  const taskCtx = useContext(TaskContext);
  const isCurrentFilterSelected = taskCtx.selectedFilterType === filterType;
  return (
    <button
      className={`${classes.Button} ${
        isCurrentFilterSelected ? classes.Active : ""
      } `}
      onClick={() => taskCtx.filterSelectedHandler(filterType)}
    >
      {title}
    </button>
  );
};
export default Button;

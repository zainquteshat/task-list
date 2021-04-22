import classes from "./TaskList.module.scss";
import Task from "./Task/Task";

const TaskList = ({ tasks, deleteTaskHandler }) => {
  const renderTasks = () => {
    if (tasks.length > 0) {
      return (
        <ul>
          {tasks.map(({ title, id, completed }) => {
            return (
              <Task
                taskTitle={title}
                key={id}
                id={id}
                completed={completed}
                deleteTaskHandler={deleteTaskHandler}
              />
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

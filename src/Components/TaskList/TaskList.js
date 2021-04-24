import classes from "./TaskList.module.scss";
import Task from "./Task/Task";

const TaskList = ({
  tasks,
  deleteTaskHandler,
  markCompletedHandler,
  selectedFilterType,
}) => {
  const filteredTasks = () => {
    switch (selectedFilterType) {
      case "open":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  const renderTasks = () => {
    if (tasks.length > 0) {
      return (
        <ul>
          {filteredTasks().map(({ title, id, completed }) => {
            return (
              <Task
                taskTitle={title}
                key={id}
                id={id}
                completed={completed}
                deleteTaskHandler={deleteTaskHandler}
                markCompletedHandler={markCompletedHandler}
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

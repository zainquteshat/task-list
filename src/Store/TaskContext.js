import { createContext } from "react";

const TasksContext = createContext({
  tasks: [],
  userInputHandler: () => {},
  deleteTaskHandler: () => {},
  markItemAsCompleted: () => {},
  filterSelectedHandler: () => {},
  selectedFilterType: () => {},
});

export default TasksContext;

import AddTask from "./Components/AddTask/AddTask";
import TaskList from "./Components/TaskList/TaskList";
import Filters from "./Components/Filters/Filters";

import TaskContextProvider from "./Store/TasksContextProvider";

import classes from "./App.module.scss";

const App = () => {
  return (
    <div className={classes.App}>
      <TaskContextProvider>
        <AddTask />
        <TaskList />
        <Filters />
      </TaskContextProvider>
    </div>
  );
};

export default App;

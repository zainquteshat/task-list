import Button from "../Button/Button";
import classes from "./Filters.module.scss";

const Filters = ({
  filterTasks,
  filterSelectedHandler,
  selectedFilterType,
}) => (
  <div className={classes.Buttons}>
    <Button
      title="ALL"
      filterType="all"
      filterTasks={filterTasks}
      filterSelectedHandler={filterSelectedHandler}
      selectedFilterType={selectedFilterType}
    />
    <Button
      title="OPEN"
      filterType="open"
      filterTasks={filterTasks}
      filterSelectedHandler={filterSelectedHandler}
      selectedFilterType={selectedFilterType}
    />
    <Button
      title="COMPLETED"
      filterType="completed"
      filterSelectedHandler={filterSelectedHandler}
      selectedFilterType={selectedFilterType}
    />
  </div>
);

export default Filters;

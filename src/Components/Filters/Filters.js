import Button from "../Button/Button";
import classes from "./Filters.module.scss";

const Filters = () => {
  return (
    <div className={classes.Buttons}>
      <Button title="ALL" filterType="all" />
      <Button title="OPEN" filterType="open" />
      <Button title="COMPLETED" filterType="completed" />
    </div>
  );
};

export default Filters;

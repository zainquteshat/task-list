import Button from "../Button/Button";
import classes from "./Filters.module.scss";

const Filters = () => (
  <div className={classes.Buttons}>
    <Button title="ALL" />
    <Button title="OPEN" />
    <Button title="COMPLETED" />
  </div>
);

export default Filters;

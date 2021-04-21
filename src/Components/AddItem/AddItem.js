import classes from "./AddItem.module.scss";

const AddItem = (props) => {
  return (
    <div className={classes.AddItem}>
      <form>
        <input
          placeholder="What needs to be done?"
          className={classes.taskInput}
        />
      </form>
    </div>
  );
};
export default AddItem;

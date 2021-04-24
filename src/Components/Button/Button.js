import classes from "./Button.module.scss";
const Button = ({
  title,
  filterType,
  filterSelectedHandler,
  selectedFilterType,
}) => {
  const isCurrentFilterSelected = selectedFilterType === filterType;
  return (
    <button
      className={`${classes.Button} ${
        isCurrentFilterSelected ? classes.Active : ""
      } `}
      onClick={() => filterSelectedHandler(filterType)}
    >
      {title}
    </button>
  );
};
export default Button;

import classes from "./Button.module.scss";
const Button = (props) => {
  return (
    <button className={`${classes.Button} ${classes.Active}`}>
      {props.title}
    </button>
  );
};
export default Button;

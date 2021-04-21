import classes from "./App.module.scss";
import Container from "./Container/Container";
const App = () => {
  return (
    <div className={classes.App}>
      <Container className={classes.Container} />
    </div>
  );
};

export default App;

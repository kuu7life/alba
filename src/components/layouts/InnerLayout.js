import classes from "./InnerLayout.module.css";

function InnerLayout(props) {
  return <div className={classes.innerLayout}>{props.children}</div>;
}

export default InnerLayout;

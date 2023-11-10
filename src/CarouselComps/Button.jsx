import Styles from "./Button.module.css";

function Button({ text }) {
  return <button className={Styles.btn2}>{text}</button>;
}

export default Button;

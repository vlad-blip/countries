import styles from "./Button.module.scss";

const Button = ({ type, onClick, children }) => {
  return type === "back" ? (
    <button className={styles.button} onClick={() => onClick()}>
      <i class="fa-solid fa-arrow-left"></i>
      {children}
    </button>
  ) : (
    <button className={styles.button} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Button;

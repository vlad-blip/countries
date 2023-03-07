import styles from "./Error.module.scss";

const Error = ({ title, message }) => {
  return (
    <div className={styles.error_container}>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

export default Error;

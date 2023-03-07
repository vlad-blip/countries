import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading_container}>
      <h1>Loading data...</h1>
      <p>Please, wait for a moment</p>
    </div>
  );
};

export default Loading;

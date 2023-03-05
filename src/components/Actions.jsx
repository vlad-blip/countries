import Search from "../components/Search";
import Filter from "../components/Filter";
import styles from "./Actions.module.scss";

const Actions = () => {
  return (
    <div className={styles.actions_container}>
      <Search />
      <Filter />
    </div>
  );
};

export default Actions;

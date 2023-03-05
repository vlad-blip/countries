import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.search_container}>
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search for a country..." />
    </div>
  );
};

export default Search;

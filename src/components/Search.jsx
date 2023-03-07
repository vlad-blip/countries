import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../store/searchSlice";
import styles from "./Search.module.scss";

const Search = () => {
  const value = useSelector((state) => state.search.input);
  const dispatch = useDispatch();

  const changeInputHandler = (event) => {
    dispatch(searchActions.setValue(event.target.value));
  };

  return (
    <div className={styles.search_container}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={changeInputHandler}
        value={value}
      />
    </div>
  );
};

export default Search;

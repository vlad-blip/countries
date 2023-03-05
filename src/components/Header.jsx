import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { themeActions } from "../store/themeSlice";
import styles from "./Header.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const themeChangeHandler = () => {
    dispatch(themeActions.toggleTheme());
  };

  return (
    <header className={`${styles.header} container`}>
      <Link to="/" className={styles.link}>
        Where in the world?
      </Link>
      <button onClick={themeChangeHandler} className={styles.theme_toggle}>
        {theme.nextMode} mode
      </button>
    </header>
  );
};

export default Header;

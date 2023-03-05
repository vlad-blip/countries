import { useSelector } from "react-redux";
import Header from "../components/Header";

import styles from "./Container.module.scss";
const Container = ({ children }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={styles.container} data-theme={theme.currentMode}>
      <Header />
      {children}
    </div>
  );
};

export default Container;

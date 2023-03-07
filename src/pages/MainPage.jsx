import { useDispatch } from "react-redux";
import { fetchCountries } from "../store/countriesSlice";

import Countries from "../components/Countries";
import Actions from "../components/Actions";
import { useEffect } from "react";

import styles from "./MainPage.module.scss";

let shouldLoad = true;

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (shouldLoad) {
      dispatch(fetchCountries());
    }
    shouldLoad = false;
  }, []);

  return (
    <main className={`${styles.main} container`}>
      <Actions />
      <Countries />
    </main>
  );
};

export default MainPage;

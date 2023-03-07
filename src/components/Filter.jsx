import styles from "./Filter.module.scss";
import { useDispatch } from "react-redux";
import { fetchCountriesByRegion } from "../store/countriesSlice";
import { useState } from "react";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const Filter = () => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState();

  const selectRegionHandler = (region) => {
    setSelected(region);
    dispatch(fetchCountriesByRegion(region));
    setActive(false);
  };

  return (
    <div className={styles.filter_container}>
      <button
        className={styles.filter_btn}
        onClick={() => setActive((prev) => !prev)}
      >
        Filter by Region{" "}
        <span className={styles.selected_region}>{selected}</span>
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      {active ? (
        <ul className={styles.filter_list}>
          {regions.map((region, index) => (
            <li
              key={index}
              className={`${selected === region ? styles.selected : ""}`}
              onClick={selectRegionHandler.bind(null, region)}
            >
              {region}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Filter;

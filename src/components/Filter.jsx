import styles from "./Filter.module.scss";
import { useState } from "react";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const Filter = () => {
  const [active, isActive] = useState(false);

  return (
    <div className={styles.filter_container}>
      <button
        className={styles.filter_btn}
        onClick={() => isActive((prev) => !prev)}
      >
        Filter by Region
        <i class="fa-solid fa-chevron-down"></i>
      </button>
      {active ? (
        <ul className={styles.filter_list}>
          {regions.map((region, index) => (
            <li key={index}>{region}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Filter;

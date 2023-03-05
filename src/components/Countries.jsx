import { useSelector } from "react-redux";

import Country from "./Country";
import styles from "./Countries.module.scss";

const Countries = () => {
  const { items, status } = useSelector((state) => state.countries);

  return status === "idle" ? (
    <h1>Loading</h1>
  ) : (
    <ul className={styles.countries}>
      {items.map((country) => (
        <li key={country.cca2}>
          <Country
            name={country.name.common}
            flags={country.flags}
            population={country.population}
            region={country.region}
            capital={country.capital ? country.capital[0] : null}
          />
        </li>
      ))}
    </ul>
  );
};

export default Countries;

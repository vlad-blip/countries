import { useSelector } from "react-redux";

import Country from "./Country";
import Error from "./Error";
import Loading from "../components/Loading";
import styles from "./Countries.module.scss";

const Countries = () => {
  const { items, status } = useSelector((state) => state.countries);
  const countryName = useSelector((state) => state.search.input);

  const filteredCountries = items.filter((item) =>
    item.name.common.includes(countryName)
  );

  if (filteredCountries.length === 0) {
    return (
      <Error
        title="Error"
        message={`There is no country that contains "${countryName}"`}
      />
    );
  }

  return status === "idle" ? (
    <Loading />
  ) : (
    <ul className={styles.countries}>
      {filteredCountries.map((country) => (
        <li key={country.cca2}>
          <Country
            name={country.name.common}
            countryCode={country.cca2}
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

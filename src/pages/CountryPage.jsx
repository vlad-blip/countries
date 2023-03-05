import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Button from "../components/Button";

import styles from "./CountryPage.module.scss";

const CountryPage = () => {
  const [countryData, setCountryData] = useState(null);

  const { countryId } = useParams();
  const navigate = useNavigate();
  const fetchCountry = async (country) => {
    const response = await fetch(
      `https://restcountries.com/v2/name/${country}`
    );
    const data = await response.json();

    setCountryData(data[0]);
  };
  useEffect(() => {
    fetchCountry(countryId);
  }, []);

  return (
    <main className={`${styles.country_main} container`}>
      <Button type="back" onClick={() => navigate(-1)}>
        Back
      </Button>
      {countryData ? (
        <section className={styles.country_section}>
          <img src={countryData.flags.svg} alt={`${countryData.name} flag`} />
          <div className={styles.country_description}>
            <h1 className={styles.country_name}>{countryData.name}</h1>
            <div className={styles.country_details}>
              <div className={styles.country_info_container}>
                <p className={styles.country_info}>
                  <span className={styles.highlight}>Native Name: </span>
                  <span className={styles.deemphasize}>
                    {countryData.nativeName}
                  </span>
                </p>
                <p className={styles.country_info}>
                  <span className={styles.highlight}>Population: </span>
                  <span className={styles.deemphasize}>
                    {countryData.population}
                  </span>
                </p>
                <p className={styles.country_info}>
                  <span className={styles.highlight}>Region: </span>
                  <span className={styles.deemphasize}>
                    {countryData.region}
                  </span>
                </p>
                <p className={styles.country_info}>
                  <span className={styles.highlight}>Sub Region: </span>
                  <span className={styles.deemphasize}>
                    {countryData.subregion}
                  </span>
                </p>
                {countryData.capital ? (
                  <p className={styles.country_info}>
                    <span className={styles.highlight}>Capital: </span>
                    <span className={styles.deemphasize}>
                      {countryData.capital}
                    </span>
                  </p>
                ) : null}
              </div>
              <div className={styles.country_info_container}>
                <p className={styles.country_info}>
                  <span className={styles.highlight}>Top Level Domain: </span>
                  <span className={styles.deemphasize}>
                    {countryData.topLevelDomain}
                  </span>
                </p>
                <p className={styles.country_info}>
                  <span className={styles.highlight}>Currencies: </span>
                  <span className={styles.deemphasize}>
                    {countryData.currencies[0].name}
                  </span>
                </p>
                <p className={styles.country_info}>
                  <span className={styles.highlight}>Languages: </span>
                  <span className={styles.deemphasize}>
                    {countryData.languages[0].name}
                  </span>
                </p>
              </div>
            </div>
            {countryData.borders ? (
              <div className={styles.country_neighbours}>
                <h2>Border countries: </h2>
                <ul>
                  {countryData.borders.map((country) => (
                    <Button>{country}</Button>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
};

export default CountryPage;

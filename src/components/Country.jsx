import styles from "./Country.module.scss";
import { useNavigate } from "react-router-dom";

const Country = ({ name, flags, population, region, capital }) => {
  const navigate = useNavigate();

  const divClickHandler = () => {
    navigate(`/country/${name}`);
  };

  return (
    <div className={styles.country} onClick={divClickHandler}>
      <img className={styles.country_flag} src={flags.svg} alt={flags.alt} />
      <div className={styles.country_description}>
        <h3 className={styles.country_name}>{name}</h3>
        <div className={styles.country_sub_description}>
          <p className={styles.country_info}>
            <span className={styles.highlight}>Population: </span>
            <span className={styles.deemphasize}>{population}</span>
          </p>
          <p className={styles.country_info}>
            <span className={styles.highlight}>Region: </span>
            <span className={styles.deemphasize}>{region}</span>
          </p>
          <p className={styles.country_info}>
            <span className={styles.highlight}>Capital: </span>
            <span className={styles.deemphasize}>{capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;

import { useDispatch } from "react-redux";
import { fetchCountries } from "../store/countriesSlice";

import Countries from "../components/Countries";
import Actions from "../components/Actions";

const MainPage = () => {
  const dispatch = useDispatch();

  dispatch(fetchCountries());

  return (
    <main className="container">
      <Actions />
      <Countries />
    </main>
  );
};

export default MainPage;

import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from "./countriesSlice";
import { themeReducer } from "./themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countriesReducer,
  },
});

export default store;

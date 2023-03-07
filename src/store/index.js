import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from "./countriesSlice";
import searchReducer from "./searchSlice";
import { themeReducer } from "./themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countriesReducer,
    search: searchReducer,
  },
});

export default store;

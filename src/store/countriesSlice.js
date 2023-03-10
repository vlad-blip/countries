import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: "idle",
};

export const fetchCountries = createAsyncThunk("fetchCountries", async () => {
  const response = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await response.json();

  return data;
});

export const fetchCountriesByRegion = createAsyncThunk(
  "fetchCountriesByRegion",
  async (region) => {
    const response =
      await fetch(`https://restcountries.com/v3.1/region/${region.toLowerCase()}
`);
    const data = await response.json();

    return data;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = "idle";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      });
    builder
      .addCase(fetchCountriesByRegion.pending, (state) => {
        state.status = "idle";
      })
      .addCase(fetchCountriesByRegion.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      });
  },
});

export const countriesActions = countriesSlice.actions;
export default countriesSlice.reducer;

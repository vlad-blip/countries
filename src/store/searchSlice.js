import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.input = action.payload.toLowerCase();
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;

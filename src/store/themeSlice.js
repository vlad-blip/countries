import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentMode: "dark",
  nextMode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state, action) {
      if (state.currentMode === "light") {
        state.currentMode = "dark";
        state.nextMode = "light";
      } else {
        state.currentMode = "light";
        state.nextMode = "dark";
      }
    },
  },
});

export const themeActions = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

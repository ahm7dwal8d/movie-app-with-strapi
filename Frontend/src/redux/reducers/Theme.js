import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
  name: "Theme",
  initialState: { theme: "light", bg: null, color: null },
  reducers: {
    setDarkMode(state) {
      // state.theme === null ? (state.theme = "light") : (state.theme = "dark");
      if (state.theme === "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { setDarkMode } = ThemeSlice.actions;
export default ThemeSlice.reducer;

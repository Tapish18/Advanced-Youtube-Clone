import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebarOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    hideSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { toggleMenu, hideSidebar } = appSlice.actions;
export default appSlice.reducer;

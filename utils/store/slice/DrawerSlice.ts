"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DrawerState {
  value: boolean;
}

// Define the initial state using that type
const initialState: DrawerState = {
  value: false,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    drawerOpen: (state) => {
      state.value = !state.value;
    },
  },
});

export const { drawerOpen } = drawerSlice.actions;

export default drawerSlice.reducer;

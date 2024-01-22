"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import db from "@/db/videos.json";
interface ModalState {
  value: {
    value: boolean;
    data: string;
  };
}

// Define the initial state using that type
const initialState: ModalState = {
  value: {
    value: false,
    data: "1",
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      const updatedDb = (state.value = {
        value: !state.value.value,
        data: action.payload,
      });
    },
  },
});

export const { openModal } = modalSlice.actions;

export default modalSlice.reducer;

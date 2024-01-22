"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface collaboratorState {
  value: boolean;
}

// Define the initial state using that type
const initialState = {
  value: [
    {
      name: "John Doe",
      email: "john@example.com",
      avatar: "/assets/user1.png",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "/assets/user1.png",
    },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      avatar: "/assets/user1.png",
    },
    {
      name: "Bob Wilson",
      email: "bob@example.com",
      avatar: "/assets/user1.png",
    },
  ],
};

export const collaboratorSlice = createSlice({
  name: "collaborator",
  initialState,
  reducers: {
    addCollaborator: (state, action) => {
      state.value.push({
        name: "",
        email: action.payload,
        avatar: "/assets/user1.png",
      });
    },
    updateCollaborator: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addCollaborator } = collaboratorSlice.actions;

export default collaboratorSlice.reducer;

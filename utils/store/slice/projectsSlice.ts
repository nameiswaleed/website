"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import db from "@/db/videos.json";
// Define the initial state using that type
const initialState: any = {
  value: db,
  videoDetail: {},
};

export const ProjectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value;
    },
    getVideoDetail: (state, action) => {
      const id = action.payload;
      state.videoDetail = state.value.find((video: any) => video.id === id);
    },
    addCollaborator: (state, action) => {
      const id = action.payload.id;
      let video = state.value.find((video: any) => video.id === id);

      video.projectCollaborators.push(action.payload.data);
      state.videoDetail.projectCollaborators.push(action.payload.data);

      console.log(state.value, "as");
    },
  },
});

export const { addUser, getVideoDetail, addCollaborator } =
  ProjectSlice.actions;

export default ProjectSlice.reducer;

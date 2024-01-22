import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./slice/ModalSlice";
import DrawerSlice from "./slice/DrawerSlice";
import collaboratorSlice from "./slice/collaboratorSlice";
import projectsSlice from "./slice/projectsSlice";
export default configureStore({
  reducer: {
    modal: ModalSlice,
    drawer: DrawerSlice,
    collaborator: collaboratorSlice,
    project: projectsSlice,
  },
});

"use client";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { Video, ProjectModal, InviteCollaborator } from "..";
import { useState } from "react";
// import userImage from "@/assets/user1.png";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addCollaborator } from "@/utils/store/slice/collaboratorSlice";
const Recent = () => {
  const modal = useSelector((state) => state.modal.value.value);
  const projects = useSelector((state) => state.project.value);
  const dispatch = useDispatch();
  const [invite, setInvite] = useState(false);
  const [form, setForm] = useState("");
  const onBlur = () => {
    setInvite(false);
  };
  const handleAddUser = () => {
    if (form !== "") {
      dispatch(addCollaborator(form));
      setForm("");
      setInvite(false);
    }
    return;
  };
  return (
    <>
      {modal && <ProjectModal />}
      {invite && (
        <div className="relative">
          <div className="fixed z-30 top-0 left-0 flex items-center flex-col space-y-3 justify-center w-full h-full bg-slate-600 bg-opacity-30">
            <Box className="flex flex-col items-start justify-between space-y-5 bg-white rounded-3xl min-w-[445px] min-h-[350px] p-5">
              <Box>
                <p className="text-2xl font-semibold">Invite Collaboraters</p>
                <p className="text-[12px] text-light-black">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </Box>
              <Box className="w-full ">
                <p className="text-[12px] text-light-black ml-4">
                  Name or Email
                </p>

                <Box className="border lg:flex hidden items-center w-full   bg-light-grey h-16 rounded-full gap-3 px-5 ">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M14.5454 17.0833H6.21208C3.71208 17.0833 2.04541 15.8333 2.04541 12.9167V7.08333C2.04541 4.16666 3.71208 2.91666 6.21208 2.91666H14.5454C17.0454 2.91666 18.7121 4.16666 18.7121 7.08333V12.9167C18.7121 15.8333 17.0454 17.0833 14.5454 17.0833Z"
                      fill="#222222"
                    />
                    <path
                      d="M10.3786 10.725C9.67864 10.725 8.97031 10.5083 8.42864 10.0667L5.82031 7.98333C5.55364 7.76667 5.50364 7.375 5.72031 7.10833C5.93698 6.84166 6.32865 6.79167 6.59531 7.00833L9.20364 9.09167C9.83697 9.6 10.912 9.6 11.5453 9.09167L14.1536 7.00833C14.4203 6.79167 14.8203 6.83333 15.0286 7.10833C15.2453 7.375 15.2036 7.775 14.9286 7.98333L12.3203 10.0667C11.787 10.5083 11.0786 10.725 10.3786 10.725Z"
                      fill="#222222"
                    />
                  </svg>

                  <input
                    type="text"
                    className="w-full outline-none bg-transparent "
                    placeholder="e.g John , john@gmail.com"
                    onChange={(e) => setForm(e.target.value)}
                    value={form}
                  />
                </Box>
              </Box>
              <Box>
                <p className="text-sm">
                  This site is protected by reCAPTCHA and the Google
                  <br />{" "}
                  <a
                    className="underline text-primary "
                    href="https://policies.google.com/privacy"
                  >
                    Privacy Policy
                  </a>{" "}
                  and
                  <a
                    className="underline text-primary "
                    href="https://policies.google.com/terms"
                  >
                    {"  "}Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </Box>
              <Box className="flex justify-end w-full">
                <Button
                  onClick={handleAddUser}
                  sx={{
                    color: "white",
                    backgroundColor: "rgb(114 93 255 / var(--tw-bg-opacity))",
                  }}
                  className="hover:text-primary"
                >
                  Add
                </Button>
              </Box>
            </Box>
            <Box>
              <Button onClick={onBlur} variant="outlined" color="error">
                Close
              </Button>
            </Box>
          </div>
        </div>
      )}
      <Box className="p-[24px] rounded-[30px] max-w-full  m-3  bg-[#F9F9F9]">
        <Grid container padding={"24px"}>
          <Grid item sm={12} md={9}>
            <Box>
              <Box className="flex items-center gap-3">
                <Typography className="text-lg lg:text-2xl " variant="h5">
                  Recent Videos
                </Typography>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6 7.45837L11.1667 12.8917C10.525 13.5334 9.47503 13.5334 8.83336 12.8917L3.40002 7.45837"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
              <Box className="flex gap-3 items-center">
                <Typography
                  className=" text-[10px] lg:text-[14px]"
                  color={"#838383"}
                  variant="subtitle1"
                >
                  Recently created videos
                </Typography>

                <Typography
                  bgcolor={"#25AE3B"}
                  color={"#FFF"}
                  variant="subtitle1"
                  className="px-2 py-1 min-w-fit rounded-full text-[9px] lg:text-[14px]"
                >
                  4 Sep, 2023
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="border lg:flex hidden items-center w-full   bg-white h-16 rounded-full gap-3 px-5 ">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.58341 18C13.9557 18 17.5001 14.4555 17.5001 10.0833C17.5001 5.71104 13.9557 2.16663 9.58341 2.16663C5.21116 2.16663 1.66675 5.71104 1.66675 10.0833C1.66675 14.4555 5.21116 18 9.58341 18Z"
                  stroke="#222222"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.3334 18.8333L16.6667 17.1666"
                  stroke="#222222"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                className="w-full outline-none "
                placeholder="Search for Project"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={{ padding: "24px" }}>
          <Grid
            item
            className="order-1 lg:-order-1 items-center"
            xs={12}
            md={12}
            lg={5}
          >
            <Box className="flex overflow-x-auto scroll-style">
              <button className=" mx-1   px-[16px] py-[12px]  min-w-fit text-[10px] lg:text-[16px] bg-[#191B1C] rounded-full text-white">
                All
              </button>
              <button className="  mx-1  px-[16px] py-[12px]  min-w-fit text-[10px] lg:text-[16px] border border-[#191B1C] hover:text-white hover:bg-[#191B1C] duration-300 rounded-full text-[#191B1C]">
                Ads video
              </button>
              <button className=" mx-1  px-[16px] py-[12px]  min-w-fit text-[10px] lg:text-[16px] border border-[#191B1C] hover:text-white hover:bg-[#191B1C] duration-300 rounded-full text-[#191B1C]">
                Ai generated video
              </button>
              <button className=" mx-1  px-[16px] py-[12px]  min-w-fit text-[10px] lg:text-[16px] border border-[#191B1C] hover:text-white hover:bg-[#191B1C] duration-300 rounded-full text-[#191B1C]">
                Marketing video
              </button>
              <button className=" mx-1  px-[16px] py-[12px]  min-w-fit text-[10px] lg:text-[16px] border border-[#191B1C] hover:text-white hover:bg-[#191B1C] duration-300 rounded-full text-[#191B1C]">
                Marketing video
              </button>
            </Box>
          </Grid>
          <Grid
            item
            className="p-5  flex items-center justify-center  md:justify-start  lg:justify-end gap-5"
            xs={12}
            md={12}
            lg={7}
          >
            <Typography
              variant="subtitle1"
              className="text-[12px] md:text-[16px]"
            >
              Collaborators
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Avatar
                className="border-2 -mr-5 border-white h-10"
                src="/assets/user1.png"
              />
              <Avatar
                className="border-2 -mr-5 border-white h-10"
                src="/assets/user1.png"
              />
              <Avatar
                className="border-2 -mr-5 border-white h-10"
                src="/assets/user1.png"
              />
            </Box>
            <Button
              sx={{
                color: "#725DFF",
                textTransform: "capitalize",
                gap: "3",
              }}
              onClick={() => setInvite(true)}
              className="min-w-[115px] text-base z-20"
            >
              <span className="text-xl mx-3">+</span> Add new
            </Button>
          </Grid>
        </Grid>
        <hr />
        <Grid
          className="max-h-[70vh] overflow-y-auto scroll-style"
          container
          paddingTop={"53px"}
        >
          {projects.map((value, index) => (
            <Video id={value.id} projectName={value.projectName} key={index} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Recent;

"use client";
import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/utils/store/slice/ModalSlice";
import db from "@/db/videos.json";
import {
  getVideoDetail,
  addCollaborator,
} from "@/utils/store/slice/projectsSlice";
interface Project {
  id: String;
  projectName: String;
  projectDescription: String;

  projectCollaborators: [
    {
      email: String;
    }
  ];
  projectImage: String;
}

const ProjectModal = () => {
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);
  const [suggest, setSuggest] = useState(false);
  const CollaboratersDb = useSelector((state: any) => state.collaborator.value);
  const selectedProject: any = useSelector((state: any) => state.modal.value);
  const [Collaborators, setCollaborators] = useState(CollaboratersDb);
  const project = useSelector((state: any) => state.project.videoDetail);

  const handleAddCollaborator = (user: String, id: String) => {
    setSuggest(false);
    dispatch(addCollaborator({ id, data: { email: user } }));
  };
  useEffect(() => {
    dispatch(getVideoDetail(selectedProject.data));
    const VideoCollaborators = CollaboratersDb.filter((collaborator: any) => {
      return !project.projectCollaborators?.some(
        (projCollab: any) => projCollab.email === collaborator.email
      );
    });
    console.log(VideoCollaborators, "video Details");
    setCollaborators(VideoCollaborators);
  }, [
    dispatch,
    selectedProject.data,
    CollaboratersDb,
    project.projectCollaborators,
  ]);

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box className="fixed overflow-y-auto scroll-style max-w-full    max-h-screen min-h-screen space-y-14 bg-white min-w-full lg:min-w-[516px] z-30 p-[32px] top-0 lg:right-0">
          <Grid container className="mb-[52px]">
            <Grid item xs={11}>
              <Typography
                variant="body2"
                className="text-[14px] text-black"
                component={"p"}
              >
                {" "}
                Recent Video
              </Typography>
            </Grid>
            <Grid item xs={1} className="relative">
              <Button
                onClick={() => setOpenMenu(!openMenu)}
                className="text-black max-w-fit"
              >
                <PiDotsThreeOutlineVerticalLight className="text-black" />
                {openMenu && (
                  <Paper className="absolute text-black z-20 top-5 left-0 -translate-x-[135px] flex justify-center items-start flex-col  min-w-[180px] min-h-[135px] p-3">
                    <Button className="text-black  min-w-full text-[14px] space-x-2">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M4.88125 1.25H10.1125C12.3938 1.25 13.75 2.60625 13.75 4.88125V10.1125C13.75 12.3875 12.3938 13.7437 10.1188 13.7437H4.88125C2.60625 13.75 1.25 12.3938 1.25 10.1188V4.88125C1.25 2.60625 2.60625 1.25 4.88125 1.25Z"
                          fill="#222222"
                        />
                        <path
                          d="M11.0563 8.42501C11.0063 8.31251 10.9188 8.21876 10.8 8.16876C10.7438 8.14376 10.6813 8.13126 10.6188 8.13126H4.375C4.11875 8.13126 3.90625 8.34376 3.90625 8.60001C3.90625 8.85626 4.11875 9.06876 4.375 9.06876H9.49375L8.45 10.1125C8.26875 10.2938 8.26875 10.5938 8.45 10.775C8.54375 10.8688 8.6625 10.9125 8.78125 10.9125C8.9 10.9125 9.01875 10.8688 9.1125 10.775L10.9563 8.93126C11 8.88751 11.0313 8.83751 11.0563 8.78126C11.1063 8.66251 11.1063 8.53751 11.0563 8.42501Z"
                          fill="#222222"
                        />
                        <path
                          d="M3.94375 6.575C3.99375 6.6875 4.08125 6.78125 4.2 6.83125C4.25625 6.85625 4.3125 6.86875 4.375 6.86875H10.625C10.8812 6.86875 11.0938 6.65625 11.0938 6.4C11.0938 6.14375 10.8812 5.93125 10.625 5.93125H5.50625L6.55 4.8875C6.73125 4.70625 6.73125 4.40625 6.55 4.225C6.36875 4.04375 6.06875 4.04375 5.8875 4.225L4.04375 6.06875C4 6.1125 3.96875 6.1625 3.94375 6.21875C3.89375 6.3375 3.89375 6.4625 3.94375 6.575Z"
                          fill="#222222"
                        />
                      </svg>

                      <Typography variant="button" className="text-black">
                        Move File
                      </Typography>
                      <SlArrowRight />
                    </Button>
                    <Button className="text-black justify-between flex items-center  min-w-fit text-[14px] space-x-2">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M9.675 1.875H4.7C2.54375 1.875 1.25 3.1625 1.25 5.325V10.2937C1.25 12.4625 2.54375 13.75 4.7 13.75H9.66875C11.8313 13.75 13.1187 12.4625 13.1187 10.3V5.325C13.125 3.1625 11.8313 1.875 9.675 1.875Z"
                          fill="#222222"
                        />
                        <path
                          d="M13.1377 1.8625C12.0189 0.737504 10.9252 0.712504 9.77517 1.8625L9.06892 2.5625C9.00642 2.625 8.98767 2.7125 9.01267 2.79375C9.45017 4.325 10.6752 5.55 12.2064 5.9875C12.2252 5.99375 12.2564 5.99375 12.2752 5.99375C12.3377 5.99375 12.4002 5.96875 12.4439 5.925L13.1377 5.225C13.7064 4.65625 13.9877 4.1125 13.9877 3.55625C13.9877 2.99375 13.7064 2.4375 13.1377 1.8625Z"
                          fill="#222222"
                        />
                        <path
                          d="M11.1627 6.51249C10.9939 6.43124 10.8314 6.34999 10.6814 6.25624C10.5564 6.18124 10.4314 6.09999 10.3127 6.01249C10.2127 5.94999 10.1002 5.85624 9.98768 5.76249C9.97518 5.75624 9.93769 5.72499 9.88768 5.67499C9.69393 5.51874 9.48769 5.30624 9.29394 5.07499C9.28144 5.06249 9.24394 5.02499 9.21269 4.96874C9.15019 4.89999 9.05644 4.78124 8.97519 4.64999C8.90644 4.56249 8.82519 4.43749 8.75019 4.30624C8.65644 4.14999 8.57519 3.99374 8.50019 3.83124C8.41894 3.65624 8.35644 3.49374 8.30019 3.33749L4.93769 6.69999C4.71894 6.91874 4.50643 7.33124 4.46268 7.63749L4.19393 9.49999C4.13768 9.89374 4.24393 10.2625 4.48768 10.5062C4.69393 10.7125 4.97518 10.8187 5.28769 10.8187C5.35644 10.8187 5.42518 10.8125 5.49393 10.8062L7.35019 10.5437C7.65644 10.5 8.06894 10.2937 8.28769 10.0687L11.6502 6.70624C11.4939 6.65624 11.3377 6.58749 11.1627 6.51249Z"
                          fill="#222222"
                        />
                      </svg>

                      <Typography variant="button" className="text-black">
                        Edit
                      </Typography>
                      <SlArrowRight />
                    </Button>
                    <Button className="text-black justify-between flex items-center text-[14px] space-x-2">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.1685 3.26877C12.1623 3.16877 11.156 3.09377 10.1435 3.03752V3.03127L10.006 2.21877C9.91229 1.64377 9.77479 0.781265 8.31229 0.781265H6.67479C5.21854 0.781265 5.08104 1.60627 4.98104 2.21252L4.84979 3.01252C4.26854 3.05002 3.68729 3.08752 3.10604 3.14377L1.83104 3.26877C1.56854 3.29377 1.38104 3.52502 1.40604 3.78127C1.43104 4.03752 1.65604 4.22502 1.91854 4.20002L3.19354 4.07502C6.46854 3.75002 9.76854 3.87502 13.081 4.20627C13.0998 4.20627 13.1123 4.20627 13.131 4.20627C13.3685 4.20627 13.5748 4.02502 13.5998 3.78127C13.6185 3.52502 13.431 3.29377 13.1685 3.26877Z"
                          fill="#222222"
                        />
                        <path
                          opacity="0.3991"
                          d="M12.0188 5.08752C11.8688 4.93127 11.6626 4.84377 11.4501 4.84377H3.55009C3.33759 4.84377 3.12509 4.93127 2.98134 5.08752C2.83759 5.24377 2.75634 5.45627 2.76884 5.67502L3.15634 12.0875C3.22509 13.0375 3.31259 14.225 5.49384 14.225H9.50634C11.6876 14.225 11.7751 13.0438 11.8438 12.0875L12.2313 5.68127C12.2438 5.45627 12.1626 5.24377 12.0188 5.08752Z"
                          fill="#222222"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.9873 10.625C5.9873 10.3661 6.19717 10.1563 6.45605 10.1563H8.5373C8.79619 10.1563 9.00605 10.3661 9.00605 10.625C9.00605 10.8839 8.79619 11.0938 8.5373 11.0938H6.45605C6.19717 11.0938 5.9873 10.8839 5.9873 10.625Z"
                          fill="#222222"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.46875 8.12502C5.46875 7.86613 5.67862 7.65627 5.9375 7.65627H9.0625C9.32138 7.65627 9.53125 7.86613 9.53125 8.12502C9.53125 8.3839 9.32138 8.59377 9.0625 8.59377H5.9375C5.67862 8.59377 5.46875 8.3839 5.46875 8.12502Z"
                          fill="#222222"
                        />
                      </svg>

                      <Typography
                        variant="button"
                        className="text-black justify-between flex items-center min-w-fit"
                      >
                        Delete
                      </Typography>
                      <SlArrowRight />
                    </Button>
                  </Paper>
                )}
              </Button>
            </Grid>
          </Grid>
          <Box className="min-w-full my-3 flex justify-start ">
            <Box className="flex items-center justify-center space-x-3 text-[#3E3E3E]">
              <Box onClick={() => dispatch(openModal(1))}>
                <svg
                  width="61"
                  height="61"
                  viewBox="0 0 61 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="30.5" cy="30.5" r="30.5" fill="#222222" />
                  <path
                    d="M34 38.67C33.81 38.67 33.62 38.6 33.47 38.45L26.95 31.93C25.89 30.87 25.89 29.13 26.95 28.07L33.47 21.55C33.76 21.26 34.24 21.26 34.53 21.55C34.82 21.84 34.82 22.32 34.53 22.61L28.01 29.13C27.53 29.61 27.53 30.39 28.01 30.87L34.53 37.39C34.82 37.68 34.82 38.16 34.53 38.45C34.38 38.59 34.19 38.67 34 38.67Z"
                    fill="white"
                  />
                </svg>
              </Box>

              <Box className="">
                <Typography variant="body2" className="text-[25px]">
                  {project.projectName}
                </Typography>
                <Typography variant="body2" className="text-[16px]">
                  Created at: 13 Aug, 2023
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="space-y-1">
            <Box className="md:w-[452px] h-[334px] bg-[url(/assets/cardImage.png)] bg-cover bg-center rounded-3xl"></Box>
            <Box className="space-y-1">
              <Box className="p-5  flex items-center justify-start  gap-5">
                <Typography
                  variant="subtitle1"
                  className="text-[12px] md:text-[16px]"
                >
                  Collaborators
                </Typography>
                <Box sx={{ display: "flex" }}>
                  {project.projectCollaborators?.map(
                    (collaborator: any, index: any) => (
                      <div key={index}>
                        <Avatar
                          key={index}
                          className="border-2 -mr-5 border-white h-10"
                          src="/assets/user1.png"
                        />
                      </div>
                    )
                  )}
                </Box>
                <Button
                  sx={{
                    color: "#725DFF",
                    textTransform: "capitalize",
                    fontSize: "14px",
                  }}
                  className=" min-w-fit"
                >
                  <span className="text-xl mx-3">+</span> Add new
                </Button>
              </Box>
              <Box className="p-5  flex items-center justify-start  gap-5">
                <Typography
                  variant="body2"
                  className="text-[12px] md:text-[16px]"
                >
                  Timeline :
                </Typography>
                <Typography
                  variant="body2"
                  className="text-[12px] md:text-[16px]"
                >
                  Feb 2, 2023 - Feb 20, 2023
                </Typography>
              </Box>
              <Box className="p-5  flex items-center justify-start  gap-5">
                <Typography
                  variant="body2"
                  className="text-[12px] md:text-[16px]"
                >
                  Timeline :
                </Typography>
                <Typography
                  color={"#FFF"}
                  variant="subtitle1"
                  className="px-2 bg-primary py-1 min-w-fit rounded-full text-[9px] lg:text-[14px]"
                >
                  In Progress
                </Typography>
              </Box>
            </Box>
          </Box>
          <hr />
          <Box className="justify-start">
            <Typography variant="body2" className="text-[18px] font-medium">
              Add Collaborater
            </Typography>
            <Typography
              variant="body2"
              className="text-[14px] space-y-3 font-medium"
            >
              Assign these tasks to some other user.
            </Typography>
          </Box>
          <Box className="justify-start space-y-5">
            <Box className="space-y-3">
              <Typography
                variant="body2"
                className="text-[14px] space-y-3 font-medium"
              >
                Select Users
              </Typography>
              <Box className="border flex   items-center w-[381px]   bg-[#F9F9F9] h-14 rounded-2xl gap-3 px-5 ">
                <input
                  type="text"
                  className="w-full outline-none bg-[#F9F9F9] "
                  placeholder=""
                  onFocus={() => setSuggest(true)}
                />
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.28 5.96667L8.9333 10.3133C8.41997 10.8267 7.57997 10.8267 7.06664 10.3133L2.71997 5.96667"
                    stroke="#222222"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
            </Box>
            {suggest && (
              <Box className="border flex  flex-col space-y-2 justify-start items-center w-[381px]   bg-[#F9F9F9] max-h-[300px] rounded-2xl gap-3 py-2 px-3 ">
                {Collaborators.map((item: any, index: any) => (
                  <Box
                    key={index}
                    className="flex  flex-row justify-start space-x-3 w-full"
                    sx={{ alignItems: "center" }}
                    onClick={() =>
                      handleAddCollaborator(item.email, project.id)
                    }
                  >
                    <Avatar src={item.avatar} />
                    <Typography
                      className="font-medium capitalize h-full
                "
                      variant="button"
                    >
                      {item.email}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProjectModal;

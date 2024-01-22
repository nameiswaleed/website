"use client";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const Collaboraters = useSelector((state: any) => state.collaborator.value);
  const [searching, setSearching] = useState(false);

  return (
    <>
      <Grid
        className="min-h-[18vh]  bg-white"
        alignContent={"center"}
        container
      >
        <Grid
          item
          xs={9}
          md={2}
          lg={2}
          className="flex items-center justify-start px-3 space-x-5"
        >
          <button className="p-3 rounded-md lg:hidden text-black bg-[#F9F9F9]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8.5H21M3 15.5H21"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <Typography
            variant="body1"
            className="flex items-center justify-center space-x-2"
            component={"span"}
          >
            <span>
              <svg
                className="rounded-full"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5" filter="url(#filter0_f_10_2338)">
                  <circle
                    cx="17.3696"
                    cy="19.5871"
                    r="10.7174"
                    fill="#BD6AFF"
                  />
                </g>
                <g filter="url(#filter1_f_10_2338)">
                  <circle cx="12.1957" cy="9.9785" r="10.7174" fill="#59FFA5" />
                </g>
                <g filter="url(#filter2_f_10_2338)">
                  <rect
                    x="-1.47827"
                    y="14.7828"
                    width="15.5217"
                    height="15.5217"
                    fill="#67BFFF"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_10_2338"
                    x="-6.65213"
                    y="-4.4346"
                    width="48.0435"
                    height="48.0435"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="6.65217"
                      result="effect1_foregroundBlur_10_2338"
                    />
                  </filter>
                  <filter
                    id="filter1_f_10_2338"
                    x="-11.8261"
                    y="-14.0432"
                    width="48.0435"
                    height="48.0435"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="6.65217"
                      result="effect1_foregroundBlur_10_2338"
                    />
                  </filter>
                  <filter
                    id="filter2_f_10_2338"
                    x="-14.7826"
                    y="1.47849"
                    width="42.1304"
                    height="42.1304"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="6.65217"
                      result="effect1_foregroundBlur_10_2338"
                    />
                  </filter>
                </defs>
              </svg>
            </span>
            <span>Hi, Jhon!</span>
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          className="hidden lg:block"
          onFocus={() => setSearching(true)}
          onBlur={() => setSearching(false)}
        >
          <div className="relative">
            <Box
              className={`flex items-center justify-center w-full bg-[#F9F9F9]  h-16  ${
                searching
                  ? "radius-custom-search"
                  : "rounded-full  bg-[#F9F9F9] "
              } gap-3 px-5`}
            >
              <input
                type="text"
                className="w-full outline-none bg-transparent"
                placeholder="Need any Assistance?"
              />
              {searching ? (
                <kbd className="min-w-fit bg-white p-1 text-xs rounded-md">
                  Ctrl + F
                </kbd>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.93C6.95998 21.93 2.84998 17.83 2.84998 12.78V10.9C2.84998 10.51 3.16998 10.2 3.54998 10.2C3.92998 10.2 4.24998 10.52 4.24998 10.9V12.78C4.24998 17.05 7.71997 20.52 11.99 20.52C16.26 20.52 19.73 17.05 19.73 12.78V10.9C19.73 10.51 20.05 10.2 20.43 10.2C20.81 10.2 21.13 10.52 21.13 10.9V12.78C21.15 17.83 17.04 21.93 12 21.93Z"
                    fill="#5F8AFA"
                  />
                  <path
                    d="M12 2C8.64002 2 5.90002 4.74 5.90002 8.1V12.79C5.90002 16.15 8.64002 18.89 12 18.89C15.36 18.89 18.1 16.15 18.1 12.79V8.1C18.1 4.74 15.36 2 12 2ZM14.18 10.59C14.11 10.86 13.86 11.04 13.59 11.04C13.54 11.04 13.48 11.03 13.43 11.02C12.41 10.74 11.33 10.74 10.31 11.02C9.98002 11.11 9.65002 10.92 9.56002 10.59C9.47002 10.27 9.66002 9.93 9.99002 9.84C11.22 9.5 12.52 9.5 13.75 9.84C14.08 9.93 14.27 10.26 14.18 10.59ZM15.03 7.82C14.94 8.07 14.71 8.22 14.46 8.22C14.39 8.22 14.32 8.21 14.25 8.18C12.72 7.62 11.04 7.62 9.51002 8.18C9.19002 8.3 8.84002 8.14 8.72002 7.82C8.61002 7.51 8.77002 7.16 9.09002 7.04C10.89 6.39 12.87 6.39 14.66 7.04C14.98 7.16 15.14 7.51 15.03 7.82Z"
                    fill="#5F8AFA"
                  />
                </svg>
              )}
              {searching && (
                <Box
                  onFocus={() => setSearching(true)}
                  className=" flex absolute top-16 left-0 search-box-main  flex-col space-y-2 justify-start items-start w-full   bg-[#F9F9F9] h-fit  gap-3 py-2 px-3 "
                >
                  <Box className="space-y-3">
                    <p className="text-[12px] text-left capitalize text-light-black">
                      {" "}
                      I’m looking for{" "}
                    </p>
                    <Box className="flex flex-wrap  flex-row justify-start items-center space-x-3 w-full">
                      <div className="flex  space-x-2 m-3 items-center justify-start bg-white p-1 rounded-md">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M6.00004 1.33325C4.25337 1.33325 2.83337 2.75325 2.83337 4.49992C2.83337 6.21325 4.17337 7.59992 5.92004 7.65992C5.97337 7.65325 6.02671 7.65325 6.06671 7.65992C6.08004 7.65992 6.08671 7.65992 6.10004 7.65992C6.10671 7.65992 6.10671 7.65992 6.11337 7.65992C7.82004 7.59992 9.16004 6.21325 9.16671 4.49992C9.16671 2.75325 7.74671 1.33325 6.00004 1.33325Z"
                            fill="#222222"
                          />
                          <path
                            d="M9.38664 9.43342C7.52664 8.19342 4.49331 8.19342 2.61997 9.43342C1.77331 10.0001 1.30664 10.7668 1.30664 11.5868C1.30664 12.4068 1.77331 13.1668 2.61331 13.7268C3.54664 14.3534 4.77331 14.6668 5.99997 14.6668C7.22664 14.6668 8.45331 14.3534 9.38664 13.7268C10.2266 13.1601 10.6933 12.4001 10.6933 11.5734C10.6866 10.7534 10.2266 9.99342 9.38664 9.43342Z"
                            fill="#222222"
                          />
                          <path
                            opacity="0.4"
                            d="M13.3267 4.89332C13.4334 6.18665 12.5134 7.31999 11.2401 7.47332C11.2334 7.47332 11.2334 7.47332 11.2267 7.47332H11.2067C11.1667 7.47332 11.1267 7.47332 11.0934 7.48665C10.4467 7.51998 9.8534 7.31332 9.40674 6.93332C10.0934 6.31998 10.4867 5.39999 10.4067 4.39999C10.3601 3.85998 10.1734 3.36665 9.89341 2.94665C10.1467 2.81999 10.4401 2.73999 10.7401 2.71332C12.0467 2.59999 13.2134 3.57332 13.3267 4.89332Z"
                            fill="#222222"
                          />
                          <path
                            d="M14.66 11.0599C14.6067 11.7066 14.1933 12.2666 13.5 12.6466C12.8333 13.0133 11.9933 13.1866 11.16 13.1666C11.64 12.7333 11.92 12.1933 11.9733 11.6199C12.04 10.7933 11.6467 9.99994 10.86 9.36661C10.4133 9.01327 9.89333 8.73327 9.32666 8.52661C10.8 8.09994 12.6533 8.38661 13.7933 9.30661C14.4067 9.79994 14.72 10.4199 14.66 11.0599Z"
                            fill="#222222"
                          />
                        </svg>
                        <span>Collaboraters</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M7.99992 14.6666C11.6818 14.6666 14.6666 11.6818 14.6666 7.99992C14.6666 4.31802 11.6818 1.33325 7.99992 1.33325C4.31802 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31802 14.6666 7.99992 14.6666Z"
                            fill="#222222"
                            fill-opacity="0.27"
                          />
                          <path
                            d="M8.70666 7.99999L10.24 6.46666C10.4333 6.27332 10.4333 5.95332 10.24 5.75999C10.0467 5.56666 9.72666 5.56666 9.53332 5.75999L7.99999 7.29332L6.46666 5.75999C6.27332 5.56666 5.95332 5.56666 5.75999 5.75999C5.56666 5.95332 5.56666 6.27332 5.75999 6.46666L7.29332 7.99999L5.75999 9.53332C5.56666 9.72666 5.56666 10.0467 5.75999 10.24C5.85999 10.34 5.98666 10.3867 6.11332 10.3867C6.23999 10.3867 6.36666 10.34 6.46666 10.24L7.99999 8.70666L9.53332 10.24C9.63332 10.34 9.75999 10.3867 9.88666 10.3867C10.0133 10.3867 10.14 10.34 10.24 10.24C10.4333 10.0467 10.4333 9.72666 10.24 9.53332L8.70666 7.99999Z"
                            fill="#222222"
                            fill-opacity="0.41"
                          />
                        </svg>
                      </div>
                      <div className="flex space-x-2 items-center justify-center bg-white p-1 rounded-md">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M8.66667 2.16675H4.66667C2.38667 2.16675 1.5 3.05341 1.5 5.33341V10.6667C1.5 12.2001 2.33333 13.8334 4.66667 13.8334H8.66667C10.9467 13.8334 11.8333 12.9467 11.8333 10.6667V5.33341C11.8333 3.05341 10.9467 2.16675 8.66667 2.16675Z"
                            fill="#222222"
                          />
                          <path
                            d="M7.66666 7.58674C8.35886 7.58674 8.92 7.02561 8.92 6.33341C8.92 5.64121 8.35886 5.08008 7.66666 5.08008C6.97447 5.08008 6.41333 5.64121 6.41333 6.33341C6.41333 7.02561 6.97447 7.58674 7.66666 7.58674Z"
                            fill="#222222"
                          />
                          <path
                            d="M14.4334 4.11324C14.1601 3.97324 13.5867 3.81324 12.8067 4.35991L11.8201 5.05324C11.8267 5.14658 11.8334 5.23324 11.8334 5.33324V10.6666C11.8334 10.7666 11.8201 10.8532 11.8201 10.9466L12.8067 11.6399C13.2201 11.9332 13.5801 12.0266 13.8667 12.0266C14.1134 12.0266 14.3067 11.9599 14.4334 11.8932C14.7067 11.7532 15.1667 11.3732 15.1667 10.4199V5.58658C15.1667 4.63324 14.7067 4.25324 14.4334 4.11324Z"
                            fill="#222222"
                          />
                        </svg>

                        <span>Videos</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M7.99992 14.6666C11.6818 14.6666 14.6666 11.6818 14.6666 7.99992C14.6666 4.31802 11.6818 1.33325 7.99992 1.33325C4.31802 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31802 14.6666 7.99992 14.6666Z"
                            fill="#222222"
                            fill-opacity="0.27"
                          />
                          <path
                            d="M8.70666 7.99999L10.24 6.46666C10.4333 6.27332 10.4333 5.95332 10.24 5.75999C10.0467 5.56666 9.72666 5.56666 9.53332 5.75999L7.99999 7.29332L6.46666 5.75999C6.27332 5.56666 5.95332 5.56666 5.75999 5.75999C5.56666 5.95332 5.56666 6.27332 5.75999 6.46666L7.29332 7.99999L5.75999 9.53332C5.56666 9.72666 5.56666 10.0467 5.75999 10.24C5.85999 10.34 5.98666 10.3867 6.11332 10.3867C6.23999 10.3867 6.36666 10.34 6.46666 10.24L7.99999 8.70666L9.53332 10.24C9.63332 10.34 9.75999 10.3867 9.88666 10.3867C10.0133 10.3867 10.14 10.34 10.24 10.24C10.4333 10.0467 10.4333 9.72666 10.24 9.53332L8.70666 7.99999Z"
                            fill="#222222"
                            fill-opacity="0.41"
                          />
                        </svg>
                      </div>
                    </Box>
                  </Box>
                  <Box className="space-y-3">
                    <p className="text-[12px] text-left capitalize text-light-black">
                      {" "}
                      Last search 3{" "}
                    </p>

                    {Collaboraters.map((item: any, index: any) => (
                      <Box
                        key={index}
                        className="flex  flex-row justify-start space-x-3 w-full"
                        sx={{ alignItems: "center" }}
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
                  <Box className="space-y-3  w-full">
                    <p className="text-[12px] text-left capitalize text-light-black">
                      {" "}
                      Quick Actions
                    </p>
                    <Box className="space-y- min-w-max   ">
                      <div className="flex items-center justify-between">
                        <div className="space-x-3 flex items-center justify-start">
                          <span>
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M12.8171 1.58325H6.18296C3.30129 1.58325 1.58337 3.30117 1.58337 6.18284V12.8091C1.58337 15.6987 3.30129 17.4166 6.18296 17.4166H12.8092C15.6909 17.4166 17.4088 15.6987 17.4088 12.817V6.18284C17.4167 3.30117 15.6988 1.58325 12.8171 1.58325Z"
                                fill="#222222"
                              />
                              <path
                                d="M12.6667 8.90617H10.0938V6.33325C10.0938 6.00867 9.82462 5.7395 9.50004 5.7395C9.17546 5.7395 8.90629 6.00867 8.90629 6.33325V8.90617H6.33337C6.00879 8.90617 5.73962 9.17534 5.73962 9.49992C5.73962 9.8245 6.00879 10.0937 6.33337 10.0937H8.90629V12.6666C8.90629 12.9912 9.17546 13.2603 9.50004 13.2603C9.82462 13.2603 10.0938 12.9912 10.0938 12.6666V10.0937H12.6667C12.9913 10.0937 13.2605 9.8245 13.2605 9.49992C13.2605 9.17534 12.9913 8.90617 12.6667 8.90617Z"
                                fill="#222222"
                              />
                            </svg>
                          </span>
                          <span>Create new Video</span>
                        </div>
                        <span className="bg-light-grey py-1 px-2 rounded-md">
                          N
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-x-3 flex items-center justify-start">
                          <span>
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M12.8171 1.58325H6.18296C3.30129 1.58325 1.58337 3.30117 1.58337 6.18284V12.8091C1.58337 15.6987 3.30129 17.4166 6.18296 17.4166H12.8092C15.6909 17.4166 17.4088 15.6987 17.4088 12.817V6.18284C17.4167 3.30117 15.6988 1.58325 12.8171 1.58325Z"
                                fill="#222222"
                              />
                              <path
                                d="M12.6667 8.90617H10.0938V6.33325C10.0938 6.00867 9.82462 5.7395 9.50004 5.7395C9.17546 5.7395 8.90629 6.00867 8.90629 6.33325V8.90617H6.33337C6.00879 8.90617 5.73962 9.17534 5.73962 9.49992C5.73962 9.8245 6.00879 10.0937 6.33337 10.0937H8.90629V12.6666C8.90629 12.9912 9.17546 13.2603 9.50004 13.2603C9.82462 13.2603 10.0938 12.9912 10.0938 12.6666V10.0937H12.6667C12.9913 10.0937 13.2605 9.8245 13.2605 9.49992C13.2605 9.17534 12.9913 8.90617 12.6667 8.90617Z"
                                fill="#222222"
                              />
                            </svg>
                          </span>
                          <span>Add Collaborater</span>
                        </div>
                        <span className="bg-light-grey py-1 px-2 rounded-md">
                          N
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-x-3 flex items-center justify-start">
                          <span>
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M12.8171 1.58325H6.18296C3.30129 1.58325 1.58337 3.30117 1.58337 6.18284V12.8091C1.58337 15.6987 3.30129 17.4166 6.18296 17.4166H12.8092C15.6909 17.4166 17.4088 15.6987 17.4088 12.817V6.18284C17.4167 3.30117 15.6988 1.58325 12.8171 1.58325Z"
                                fill="#222222"
                              />
                              <path
                                d="M12.6667 8.90617H10.0938V6.33325C10.0938 6.00867 9.82462 5.7395 9.50004 5.7395C9.17546 5.7395 8.90629 6.00867 8.90629 6.33325V8.90617H6.33337C6.00879 8.90617 5.73962 9.17534 5.73962 9.49992C5.73962 9.8245 6.00879 10.0937 6.33337 10.0937H8.90629V12.6666C8.90629 12.9912 9.17546 13.2603 9.50004 13.2603C9.82462 13.2603 10.0938 12.9912 10.0938 12.6666V10.0937H12.6667C12.9913 10.0937 13.2605 9.8245 13.2605 9.49992C13.2605 9.17534 12.9913 8.90617 12.6667 8.90617Z"
                                fill="#222222"
                              />
                            </svg>
                          </span>
                          <span>Move File</span>
                        </div>
                        <span className="bg-light-grey py-1 px-2 rounded-md">
                          N
                        </span>
                      </div>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </div>
        </Grid>
        <Grid
          item
          className="p-5  lg:flex items-center hidden justify-start md:justify-start lg:justify-end gap-5"
          xs={4}
        >
          <Typography
            variant="subtitle1"
            className="text-[12px] md:text-[16px]"
          >
            Collaborators({Collaboraters.length}):
          </Typography>
          <Box sx={{ display: "flex" }}>
            {Collaboraters.map((item: any, index: any) => (
              <Avatar
                key={index}
                className="border-2 -mr-3 border-white h-10"
                src={item.avatar}
              />
            ))}
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          className="flex flex-row items-center p-3 justify-end font-medium "
        >
          <Box className="flex flex-row items-center justify-between space-x-3">
            <Box className=" hidden lg:flex flex-col justify-end">
              <Typography className="font-medium">Marvin McKinney</Typography>
              <Typography>marving@gmail.com</Typography>
            </Box>
            <Box className="bg-[url(/assets/cardImage.png)] rounded-md min-w-[52px] bg-cover bg-center min-h-[52px]"></Box>
          </Box>
        </Grid>
      </Grid>

      <div className="relative block lg:hidden p-5">
        <Box
          className={`flex items-center justify-center w-full  shadow-sm z-50  h-16  ${
            searching
              ? "radius-custom-search bg-white"
              : "rounded-full  bg-[#F9F9F9]"
          } gap-3 px-5`}
          onFocus={() => setSearching(true)}
          onBlur={() => setSearching(false)}
        >
          <input
            type="text"
            className="w-full outline-none bg-transparent"
            placeholder="Need any Assistance?"
          />
          {searching ? (
            <kbd className="min-w-fit bg-white p-1 text-xs rounded-md">
              Ctrl + F
            </kbd>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.93C6.95998 21.93 2.84998 17.83 2.84998 12.78V10.9C2.84998 10.51 3.16998 10.2 3.54998 10.2C3.92998 10.2 4.24998 10.52 4.24998 10.9V12.78C4.24998 17.05 7.71997 20.52 11.99 20.52C16.26 20.52 19.73 17.05 19.73 12.78V10.9C19.73 10.51 20.05 10.2 20.43 10.2C20.81 10.2 21.13 10.52 21.13 10.9V12.78C21.15 17.83 17.04 21.93 12 21.93Z"
                fill="#5F8AFA"
              />
              <path
                d="M12 2C8.64002 2 5.90002 4.74 5.90002 8.1V12.79C5.90002 16.15 8.64002 18.89 12 18.89C15.36 18.89 18.1 16.15 18.1 12.79V8.1C18.1 4.74 15.36 2 12 2ZM14.18 10.59C14.11 10.86 13.86 11.04 13.59 11.04C13.54 11.04 13.48 11.03 13.43 11.02C12.41 10.74 11.33 10.74 10.31 11.02C9.98002 11.11 9.65002 10.92 9.56002 10.59C9.47002 10.27 9.66002 9.93 9.99002 9.84C11.22 9.5 12.52 9.5 13.75 9.84C14.08 9.93 14.27 10.26 14.18 10.59ZM15.03 7.82C14.94 8.07 14.71 8.22 14.46 8.22C14.39 8.22 14.32 8.21 14.25 8.18C12.72 7.62 11.04 7.62 9.51002 8.18C9.19002 8.3 8.84002 8.14 8.72002 7.82C8.61002 7.51 8.77002 7.16 9.09002 7.04C10.89 6.39 12.87 6.39 14.66 7.04C14.98 7.16 15.14 7.51 15.03 7.82Z"
                fill="#5F8AFA"
              />
            </svg>
          )}
          {searching && (
            <Box
              onFocus={() => setSearching(true)}
              className=" m-5 shadow-sm flex absolute z-30 top-16 left-0 search-box-main  flex-col space-y-2 justify-start items-start w-full   bg-white h-fit  gap-3 py-2 px-3 "
            >
              <Box className="space-y-3">
                <p className="text-[12px] text-left capitalize text-light-black">
                  {" "}
                  I’m looking for{" "}
                </p>
                <Box className="flex flex-wrap  flex-row justify-start items-center space-x-3 w-full">
                  <div className="flex  space-x-2 m-3 items-center justify-start bg-white p-1 rounded-md">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M6.00004 1.33325C4.25337 1.33325 2.83337 2.75325 2.83337 4.49992C2.83337 6.21325 4.17337 7.59992 5.92004 7.65992C5.97337 7.65325 6.02671 7.65325 6.06671 7.65992C6.08004 7.65992 6.08671 7.65992 6.10004 7.65992C6.10671 7.65992 6.10671 7.65992 6.11337 7.65992C7.82004 7.59992 9.16004 6.21325 9.16671 4.49992C9.16671 2.75325 7.74671 1.33325 6.00004 1.33325Z"
                        fill="#222222"
                      />
                      <path
                        d="M9.38664 9.43342C7.52664 8.19342 4.49331 8.19342 2.61997 9.43342C1.77331 10.0001 1.30664 10.7668 1.30664 11.5868C1.30664 12.4068 1.77331 13.1668 2.61331 13.7268C3.54664 14.3534 4.77331 14.6668 5.99997 14.6668C7.22664 14.6668 8.45331 14.3534 9.38664 13.7268C10.2266 13.1601 10.6933 12.4001 10.6933 11.5734C10.6866 10.7534 10.2266 9.99342 9.38664 9.43342Z"
                        fill="#222222"
                      />
                      <path
                        opacity="0.4"
                        d="M13.3267 4.89332C13.4334 6.18665 12.5134 7.31999 11.2401 7.47332C11.2334 7.47332 11.2334 7.47332 11.2267 7.47332H11.2067C11.1667 7.47332 11.1267 7.47332 11.0934 7.48665C10.4467 7.51998 9.8534 7.31332 9.40674 6.93332C10.0934 6.31998 10.4867 5.39999 10.4067 4.39999C10.3601 3.85998 10.1734 3.36665 9.89341 2.94665C10.1467 2.81999 10.4401 2.73999 10.7401 2.71332C12.0467 2.59999 13.2134 3.57332 13.3267 4.89332Z"
                        fill="#222222"
                      />
                      <path
                        d="M14.66 11.0599C14.6067 11.7066 14.1933 12.2666 13.5 12.6466C12.8333 13.0133 11.9933 13.1866 11.16 13.1666C11.64 12.7333 11.92 12.1933 11.9733 11.6199C12.04 10.7933 11.6467 9.99994 10.86 9.36661C10.4133 9.01327 9.89333 8.73327 9.32666 8.52661C10.8 8.09994 12.6533 8.38661 13.7933 9.30661C14.4067 9.79994 14.72 10.4199 14.66 11.0599Z"
                        fill="#222222"
                      />
                    </svg>
                    <span>Collaboraters</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M7.99992 14.6666C11.6818 14.6666 14.6666 11.6818 14.6666 7.99992C14.6666 4.31802 11.6818 1.33325 7.99992 1.33325C4.31802 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31802 14.6666 7.99992 14.6666Z"
                        fill="#222222"
                        fill-opacity="0.27"
                      />
                      <path
                        d="M8.70666 7.99999L10.24 6.46666C10.4333 6.27332 10.4333 5.95332 10.24 5.75999C10.0467 5.56666 9.72666 5.56666 9.53332 5.75999L7.99999 7.29332L6.46666 5.75999C6.27332 5.56666 5.95332 5.56666 5.75999 5.75999C5.56666 5.95332 5.56666 6.27332 5.75999 6.46666L7.29332 7.99999L5.75999 9.53332C5.56666 9.72666 5.56666 10.0467 5.75999 10.24C5.85999 10.34 5.98666 10.3867 6.11332 10.3867C6.23999 10.3867 6.36666 10.34 6.46666 10.24L7.99999 8.70666L9.53332 10.24C9.63332 10.34 9.75999 10.3867 9.88666 10.3867C10.0133 10.3867 10.14 10.34 10.24 10.24C10.4333 10.0467 10.4333 9.72666 10.24 9.53332L8.70666 7.99999Z"
                        fill="#222222"
                        fill-opacity="0.41"
                      />
                    </svg>
                  </div>
                  <div className="flex space-x-2 items-center justify-center bg-white p-1 rounded-md">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M8.66667 2.16675H4.66667C2.38667 2.16675 1.5 3.05341 1.5 5.33341V10.6667C1.5 12.2001 2.33333 13.8334 4.66667 13.8334H8.66667C10.9467 13.8334 11.8333 12.9467 11.8333 10.6667V5.33341C11.8333 3.05341 10.9467 2.16675 8.66667 2.16675Z"
                        fill="#222222"
                      />
                      <path
                        d="M7.66666 7.58674C8.35886 7.58674 8.92 7.02561 8.92 6.33341C8.92 5.64121 8.35886 5.08008 7.66666 5.08008C6.97447 5.08008 6.41333 5.64121 6.41333 6.33341C6.41333 7.02561 6.97447 7.58674 7.66666 7.58674Z"
                        fill="#222222"
                      />
                      <path
                        d="M14.4334 4.11324C14.1601 3.97324 13.5867 3.81324 12.8067 4.35991L11.8201 5.05324C11.8267 5.14658 11.8334 5.23324 11.8334 5.33324V10.6666C11.8334 10.7666 11.8201 10.8532 11.8201 10.9466L12.8067 11.6399C13.2201 11.9332 13.5801 12.0266 13.8667 12.0266C14.1134 12.0266 14.3067 11.9599 14.4334 11.8932C14.7067 11.7532 15.1667 11.3732 15.1667 10.4199V5.58658C15.1667 4.63324 14.7067 4.25324 14.4334 4.11324Z"
                        fill="#222222"
                      />
                    </svg>

                    <span>Videos</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M7.99992 14.6666C11.6818 14.6666 14.6666 11.6818 14.6666 7.99992C14.6666 4.31802 11.6818 1.33325 7.99992 1.33325C4.31802 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31802 14.6666 7.99992 14.6666Z"
                        fill="#222222"
                        fill-opacity="0.27"
                      />
                      <path
                        d="M8.70666 7.99999L10.24 6.46666C10.4333 6.27332 10.4333 5.95332 10.24 5.75999C10.0467 5.56666 9.72666 5.56666 9.53332 5.75999L7.99999 7.29332L6.46666 5.75999C6.27332 5.56666 5.95332 5.56666 5.75999 5.75999C5.56666 5.95332 5.56666 6.27332 5.75999 6.46666L7.29332 7.99999L5.75999 9.53332C5.56666 9.72666 5.56666 10.0467 5.75999 10.24C5.85999 10.34 5.98666 10.3867 6.11332 10.3867C6.23999 10.3867 6.36666 10.34 6.46666 10.24L7.99999 8.70666L9.53332 10.24C9.63332 10.34 9.75999 10.3867 9.88666 10.3867C10.0133 10.3867 10.14 10.34 10.24 10.24C10.4333 10.0467 10.4333 9.72666 10.24 9.53332L8.70666 7.99999Z"
                        fill="#222222"
                        fill-opacity="0.41"
                      />
                    </svg>
                  </div>
                </Box>
              </Box>
              <Box className="space-y-3">
                <p className="text-[12px] text-left capitalize text-light-black">
                  {" "}
                  Last search 3{" "}
                </p>
                <Box
                  className="flex  flex-row justify-start space-x-3 w-full"
                  sx={{ alignItems: "center" }}
                >
                  <Avatar src="/assets/user1.png" />
                  <Typography
                    className="font-medium capitalize h-full
                      "
                    variant="button"
                  >
                    Guy Hawkins guy@icloud.com
                  </Typography>
                </Box>
                <Box
                  className="flex  flex-row justify-start space-x-3 w-full"
                  sx={{ alignItems: "center" }}
                >
                  <Avatar src="/assets/user1.png" />
                  <Typography
                    className="font-medium capitalize h-full
                      "
                    variant="button"
                  >
                    Guy Hawkins guy@icloud.com
                  </Typography>
                </Box>
                <Box
                  className="flex  flex-row justify-start space-x-3 w-full"
                  sx={{ alignItems: "center" }}
                >
                  <Avatar src="/assets/user1.png" />
                  <Typography
                    className="font-medium capitalize h-full
                      "
                    variant="button"
                  >
                    Guy Hawkins guy@icloud.com
                  </Typography>
                </Box>
              </Box>
              <Box className="space-y-3  w-full">
                <p className="text-[12px] text-left capitalize text-light-black">
                  {" "}
                  Quick Actions
                </p>
                <Box className="space-y- min-w-max   ">
                  <div className="flex items-center justify-between">
                    <div className="space-x-3 flex items-center justify-start">
                      <span>
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M12.8171 1.58325H6.18296C3.30129 1.58325 1.58337 3.30117 1.58337 6.18284V12.8091C1.58337 15.6987 3.30129 17.4166 6.18296 17.4166H12.8092C15.6909 17.4166 17.4088 15.6987 17.4088 12.817V6.18284C17.4167 3.30117 15.6988 1.58325 12.8171 1.58325Z"
                            fill="#222222"
                          />
                          <path
                            d="M12.6667 8.90617H10.0938V6.33325C10.0938 6.00867 9.82462 5.7395 9.50004 5.7395C9.17546 5.7395 8.90629 6.00867 8.90629 6.33325V8.90617H6.33337C6.00879 8.90617 5.73962 9.17534 5.73962 9.49992C5.73962 9.8245 6.00879 10.0937 6.33337 10.0937H8.90629V12.6666C8.90629 12.9912 9.17546 13.2603 9.50004 13.2603C9.82462 13.2603 10.0938 12.9912 10.0938 12.6666V10.0937H12.6667C12.9913 10.0937 13.2605 9.8245 13.2605 9.49992C13.2605 9.17534 12.9913 8.90617 12.6667 8.90617Z"
                            fill="#222222"
                          />
                        </svg>
                      </span>
                      <span>Create new Video</span>
                    </div>
                    <span className="bg-light-grey py-1 px-2 rounded-md">
                      N
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-x-3 flex items-center justify-start">
                      <span>
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M12.8171 1.58325H6.18296C3.30129 1.58325 1.58337 3.30117 1.58337 6.18284V12.8091C1.58337 15.6987 3.30129 17.4166 6.18296 17.4166H12.8092C15.6909 17.4166 17.4088 15.6987 17.4088 12.817V6.18284C17.4167 3.30117 15.6988 1.58325 12.8171 1.58325Z"
                            fill="#222222"
                          />
                          <path
                            d="M12.6667 8.90617H10.0938V6.33325C10.0938 6.00867 9.82462 5.7395 9.50004 5.7395C9.17546 5.7395 8.90629 6.00867 8.90629 6.33325V8.90617H6.33337C6.00879 8.90617 5.73962 9.17534 5.73962 9.49992C5.73962 9.8245 6.00879 10.0937 6.33337 10.0937H8.90629V12.6666C8.90629 12.9912 9.17546 13.2603 9.50004 13.2603C9.82462 13.2603 10.0938 12.9912 10.0938 12.6666V10.0937H12.6667C12.9913 10.0937 13.2605 9.8245 13.2605 9.49992C13.2605 9.17534 12.9913 8.90617 12.6667 8.90617Z"
                            fill="#222222"
                          />
                        </svg>
                      </span>
                      <span>Add Collaborater</span>
                    </div>
                    <span className="bg-light-grey py-1 px-2 rounded-md">
                      N
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-x-3 flex items-center justify-start">
                      <span>
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M12.8171 1.58325H6.18296C3.30129 1.58325 1.58337 3.30117 1.58337 6.18284V12.8091C1.58337 15.6987 3.30129 17.4166 6.18296 17.4166H12.8092C15.6909 17.4166 17.4088 15.6987 17.4088 12.817V6.18284C17.4167 3.30117 15.6988 1.58325 12.8171 1.58325Z"
                            fill="#222222"
                          />
                          <path
                            d="M12.6667 8.90617H10.0938V6.33325C10.0938 6.00867 9.82462 5.7395 9.50004 5.7395C9.17546 5.7395 8.90629 6.00867 8.90629 6.33325V8.90617H6.33337C6.00879 8.90617 5.73962 9.17534 5.73962 9.49992C5.73962 9.8245 6.00879 10.0937 6.33337 10.0937H8.90629V12.6666C8.90629 12.9912 9.17546 13.2603 9.50004 13.2603C9.82462 13.2603 10.0938 12.9912 10.0938 12.6666V10.0937H12.6667C12.9913 10.0937 13.2605 9.8245 13.2605 9.49992C13.2605 9.17534 12.9913 8.90617 12.6667 8.90617Z"
                            fill="#222222"
                          />
                        </svg>
                      </span>
                      <span>Move File</span>
                    </div>
                    <span className="bg-light-grey py-1 px-2 rounded-md">
                      N
                    </span>
                  </div>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </div>
    </>
  );
};

export default Header;

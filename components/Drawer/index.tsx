import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";
const Drawer = () => {
  // const drawer = useSelector((state: any) => state.drawer.value);
  return (
    <Box
      className={`bg-[#F9F9F9] min-h-[100vh] space-y-10  overflow-y-auto  ${""}`}
    >
      <Box className="flex items-center justify-between">
        <Button>
          <Image
            src={"/assets/menu-icon.svg"}
            alt="menu-icon"
            width={30}
            height={30}
          />
        </Button>
        <div className="flex items-center justify-center space-x-2 my-8">
          <Button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.58329 17.5C13.9555 17.5 17.5 13.9556 17.5 9.58334C17.5 5.21108 13.9555 1.66667 9.58329 1.66667C5.21104 1.66667 1.66663 5.21108 1.66663 9.58334C1.66663 13.9556 5.21104 17.5 9.58329 17.5Z"
                stroke="#222222"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.3333 18.3333L16.6666 16.6667"
                stroke="#222222"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M14.6834 4.76667L5.84169 13.6083C5.23336 12.7833 4.90002 11.775 4.90002 10.6833V6.75834C4.90002 5.225 5.58336 3.85001 6.66669 2.91667V6.36667C6.66669 6.69167 6.93336 6.95834 7.25002 6.95834C7.57502 6.95834 7.84169 6.69167 7.84169 6.36667V2.14167C8.22502 1.95001 8.63336 1.81667 9.05836 1.74167V4.79167C9.05836 5.12501 9.32502 5.38334 9.65002 5.38334C9.97502 5.38334 10.2417 5.12501 10.2417 4.79167V1.66667C12.2334 1.75834 13.95 3.00834 14.6834 4.76667Z"
                fill="#725DFF"
              />
              <path
                d="M15.1 7.39999V10.6833C15.1 13.4917 12.8084 15.7833 10 15.7833C9.85005 15.7833 9.70005 15.775 9.55005 15.7583C9.48338 15.7583 9.41672 15.75 9.35838 15.7417C9.25005 15.725 9.14172 15.7083 9.04172 15.6917C9.00005 15.6917 8.96672 15.675 8.91672 15.6667C8.80005 15.6417 8.68338 15.6083 8.57505 15.575C8.39172 15.525 8.21672 15.4583 8.05005 15.3917C7.94172 15.35 7.84172 15.3083 7.74172 15.25C7.71672 15.2417 7.70005 15.225 7.67505 15.2167C7.59172 15.175 7.50838 15.1333 7.42505 15.075L15.1 7.39999Z"
                fill="#725DFF"
              />
              <path
                d="M18.125 9.16667V10.8333C18.125 15.3167 14.4834 18.9583 10 18.9583C8.23336 18.9583 6.54169 18.3917 5.15002 17.35L6.05002 16.45C7.20002 17.2667 8.56669 17.7083 10 17.7083C13.7917 17.7083 16.875 14.625 16.875 10.8333V9.16667C16.875 8.82501 17.1584 8.54167 17.5 8.54167C17.8417 8.54167 18.125 8.82501 18.125 9.16667Z"
                fill="#725DFF"
              />
              <path
                d="M18.1416 1.85834C17.8916 1.60834 17.4833 1.60834 17.2333 1.85834L1.85828 17.2417C1.60828 17.4917 1.60828 17.9 1.85828 18.15C1.98328 18.2667 2.14161 18.3333 2.30828 18.3333C2.47494 18.3333 2.63328 18.2667 2.75828 18.1417L18.1416 2.75834C18.3999 2.50834 18.3999 2.10834 18.1416 1.85834Z"
                fill="#725DFF"
              />
            </svg>
          </Button>
        </div>
      </Box>
      {/* // overview start */}
      <Box className="p-5 space-y-10 ">
        <Typography
          className="text-[#676767] text-[14px]"
          variant="body2"
          component={"p"}
        >
          Overview
        </Typography>
        <Box className="flex items-start flex-col justify-center">
          <div className="flex items-center justify-center space-x-3">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.32996 14.49L9.70996 11.4C10.05 10.96 10.68 10.88 11.12 11.22L12.95 12.66C13.39 13 14.02 12.92 14.36 12.49L16.67 9.50999"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text-[16px]">Recent Videos</p>
          </div>
        </Box>
        <Box className="flex items-start flex-col justify-center">
          <div className="flex items-center justify-center space-x-3">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5399 8.31C18.8986 8.31 20 7.20862 20 5.85C20 4.49138 18.8986 3.39 17.5399 3.39C16.1813 3.39 15.08 4.49138 15.08 5.85C15.08 7.20862 16.1813 8.31 17.5399 8.31Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M6.46001 8.31C7.81863 8.31 8.92 7.20862 8.92 5.85C8.92 4.49138 7.81863 3.39 6.46001 3.39C5.10139 3.39 4 4.49138 4 5.85C4 7.20862 5.10139 8.31 6.46001 8.31Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M17.5399 20.61C18.8986 20.61 20 19.5086 20 18.15C20 16.7914 18.8986 15.69 17.5399 15.69C16.1813 15.69 15.08 16.7914 15.08 18.15C15.08 19.5086 16.1813 20.61 17.5399 20.61Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.46001 20.61C7.81863 20.61 8.92 19.5086 8.92 18.15C8.92 16.7914 7.81863 15.69 6.46001 15.69C5.10139 15.69 4 16.7914 4 18.15C4 19.5086 5.10139 20.61 6.46001 20.61Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text-[16px]">Projects</p>
          </div>
        </Box>
        <Box className="flex items-start flex-col justify-center">
          <div className="flex items-center justify-center space-x-3">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.22 21.63C13.04 21.63 11.37 20.8 10.05 16.83L9.33 14.67L7.17 13.95C3.21 12.63 2.38 10.96 2.38 9.78C2.38 8.61 3.21 6.93 7.17 5.6L15.66 2.77C17.78 2.06 19.55 2.27 20.64 3.35C21.73 4.43 21.94 6.21 21.23 8.33L18.4 16.82C17.07 20.8 15.4 21.63 14.22 21.63ZM7.64 7.03C4.86 7.96 3.87 9.06 3.87 9.78C3.87 10.5 4.86 11.6 7.64 12.52L10.16 13.36C10.38 13.43 10.56 13.61 10.63 13.83L11.47 16.35C12.39 19.13 13.5 20.12 14.22 20.12C14.94 20.12 16.04 19.13 16.97 16.35L19.8 7.86C20.31 6.32 20.22 5.06 19.57 4.41C18.92 3.76 17.66 3.68 16.13 4.19L7.64 7.03Z"
                  fill="#292D32"
                />
                <path
                  d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                  fill="#292D32"
                />
              </svg>
            </span>
            <p className="text-[16px]">Collaboraters</p>
          </div>
        </Box>
      </Box>
      {/* // overview end */}

      {/* // general start */}
      <Box className="p-5 space-y-10 ">
        <Typography
          className="text-[#676767] text-[14px]"
          variant="body2"
          component={"p"}
        >
          General
        </Typography>
        <Box className="flex items-start flex-col justify-center">
          <div className="flex items-center justify-center space-x-3">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 9H7"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 10.97V13.03C22 13.58 21.56 14.03 21 14.05H19.0399C17.9599 14.05 16.97 13.26 16.88 12.18C16.82 11.55 17.0599 10.96 17.4799 10.55C17.8499 10.17 18.36 9.95001 18.92 9.95001H21C21.56 9.97001 22 10.42 22 10.97Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H7C4 20.5 2 18.5 2 15.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text-[16px]">Payment</p>
          </div>
        </Box>
        <Box className="flex items-start flex-col justify-center">
          <div className="flex items-center justify-center space-x-3">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.15957 11.62C9.12957 11.62 9.10957 11.62 9.07957 11.62C9.02957 11.61 8.95957 11.61 8.89957 11.62C5.99957 11.53 3.80957 9.25 3.80957 6.44C3.80957 3.58 6.13957 1.25 8.99957 1.25C11.8596 1.25 14.1896 3.58 14.1896 6.44C14.1796 9.25 11.9796 11.53 9.18957 11.62C9.17957 11.62 9.16957 11.62 9.15957 11.62ZM8.99957 2.75C6.96957 2.75 5.30957 4.41 5.30957 6.44C5.30957 8.44 6.86957 10.05 8.85957 10.12C8.91957 10.11 9.04957 10.11 9.17957 10.12C11.1396 10.03 12.6796 8.42 12.6896 6.44C12.6896 4.41 11.0296 2.75 8.99957 2.75Z"
                  fill="#292D32"
                />
                <path
                  d="M16.5396 11.75C16.5096 11.75 16.4796 11.75 16.4496 11.74C16.0396 11.78 15.6196 11.49 15.5796 11.08C15.5396 10.67 15.7896 10.3 16.1996 10.25C16.3196 10.24 16.4496 10.24 16.5596 10.24C18.0196 10.16 19.1596 8.96 19.1596 7.49C19.1596 5.97 17.9296 4.74 16.4096 4.74C15.9996 4.75 15.6596 4.41 15.6596 4C15.6596 3.59 15.9996 3.25 16.4096 3.25C18.7496 3.25 20.6596 5.16 20.6596 7.5C20.6596 9.8 18.8596 11.66 16.5696 11.75C16.5596 11.75 16.5496 11.75 16.5396 11.75Z"
                  fill="#292D32"
                />
                <path
                  d="M9.16961 22.55C7.20961 22.55 5.23961 22.05 3.74961 21.05C2.35961 20.13 1.59961 18.87 1.59961 17.5C1.59961 16.13 2.35961 14.86 3.74961 13.93C6.74961 11.94 11.6096 11.94 14.5896 13.93C15.9696 14.85 16.7396 16.11 16.7396 17.48C16.7396 18.85 15.9796 20.12 14.5896 21.05C13.0896 22.05 11.1296 22.55 9.16961 22.55ZM4.57961 15.19C3.61961 15.83 3.09961 16.65 3.09961 17.51C3.09961 18.36 3.62961 19.18 4.57961 19.81C7.06961 21.48 11.2696 21.48 13.7596 19.81C14.7196 19.17 15.2396 18.35 15.2396 17.49C15.2396 16.64 14.7096 15.82 13.7596 15.19C11.2696 13.53 7.06961 13.53 4.57961 15.19Z"
                  fill="#292D32"
                />
                <path
                  d="M18.3396 20.75C17.9896 20.75 17.6796 20.51 17.6096 20.15C17.5296 19.74 17.7896 19.35 18.1896 19.26C18.8196 19.13 19.3996 18.88 19.8496 18.53C20.4196 18.1 20.7296 17.56 20.7296 16.99C20.7296 16.42 20.4196 15.88 19.8596 15.46C19.4196 15.12 18.8696 14.88 18.2196 14.73C17.8196 14.64 17.5596 14.24 17.6496 13.83C17.7396 13.43 18.1396 13.17 18.5496 13.26C19.4096 13.45 20.1596 13.79 20.7696 14.26C21.6996 14.96 22.2296 15.95 22.2296 16.99C22.2296 18.03 21.6896 19.02 20.7596 19.73C20.1396 20.21 19.3596 20.56 18.4996 20.73C18.4396 20.75 18.3896 20.75 18.3396 20.75Z"
                  fill="#292D32"
                />
              </svg>
            </span>
            <p className="text-[16px]">Messages</p>
          </div>
        </Box>
        <Box className="flex items-start flex-col justify-center">
          <div className="flex items-center justify-center space-x-3">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 13H12"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 17H16"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text-[16px]">News</p>
          </div>
        </Box>
      </Box>
      {/* // general end */}

      {/* // overview start */}
      <Box className="p-5 space-y-10 ">
        <Box className="flex items-start flex-col justify-center">
          <div className="flex items-center justify-center space-x-3">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 10.52C11.59 10.52 11.25 10.18 11.25 9.77V6.44C11.25 6.03 11.59 5.69 12 5.69C12.41 5.69 12.75 6.03 12.75 6.44V9.77C12.75 10.19 12.41 10.52 12 10.52Z"
                  fill="#292D32"
                />
                <path
                  d="M12.02 20.35C9.43999 20.35 6.86999 19.94 4.41999 19.12C3.50999 18.82 2.81999 18.17 2.51999 17.35C2.21999 16.53 2.31999 15.59 2.80999 14.77L4.07999 12.65C4.35999 12.18 4.60999 11.3 4.60999 10.75V8.64999C4.60999 4.55999 7.92999 1.23999 12.02 1.23999C16.11 1.23999 19.43 4.55999 19.43 8.64999V10.75C19.43 11.29 19.68 12.18 19.96 12.65L21.23 14.77C21.7 15.55 21.78 16.48 21.47 17.33C21.16 18.18 20.48 18.83 19.62 19.12C17.17 19.95 14.6 20.35 12.02 20.35ZM12.02 2.74999C8.75999 2.74999 6.10999 5.39999 6.10999 8.65999V10.76C6.10999 11.57 5.78999 12.74 5.36999 13.43L4.09999 15.56C3.83999 15.99 3.77999 16.45 3.92999 16.85C4.07999 17.25 4.41999 17.55 4.89999 17.71C9.49999 19.24 14.56 19.24 19.16 17.71C19.59 17.57 19.92 17.25 20.07 16.83C20.23 16.41 20.18 15.95 19.95 15.56L18.68 13.44C18.26 12.75 17.94 11.58 17.94 10.77V8.66999C17.93 5.39999 15.28 2.74999 12.02 2.74999Z"
                  fill="#292D32"
                />
                <path
                  d="M12 22.9C10.93 22.9 9.88004 22.46 9.12004 21.7C8.36004 20.94 7.92004 19.89 7.92004 18.82H9.42004C9.42004 19.5 9.70004 20.16 10.18 20.64C10.66 21.12 11.32 21.4 12 21.4C13.42 21.4 14.58 20.24 14.58 18.82H16.08C16.08 21.07 14.25 22.9 12 22.9Z"
                  fill="#292D32"
                />
              </svg>
            </span>
            <p className="text-[16px]">Notification</p>
          </div>
        </Box>
        <Box className="flex items-start flex-col justify-center">
          <div className="flex items-center justify-center space-x-3">
            <span>
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 9.5V23C12 24.08 11.56 25.07 10.86 25.79L10.82 25.83C10.73 25.92 10.63 26.01 10.54 26.08C10.24 26.34 9.89999 26.54 9.54999 26.68C9.43999 26.73 9.33 26.77 9.22 26.81C8.83 26.94 8.41 27 8 27C7.73 27 7.46001 26.97 7.20001 26.92C7.07001 26.89 6.94 26.86 6.81 26.82C6.65 26.77 6.50001 26.72 6.35001 26.65C6.35001 26.64 6.35 26.64 6.34 26.65C6.06 26.51 5.79001 26.35 5.54001 26.16L5.53 26.15C5.4 26.05 5.28001 25.95 5.17001 25.83C5.06001 25.71 4.95 25.59 4.84 25.46C4.65 25.21 4.49001 24.94 4.35001 24.66C4.36001 24.65 4.36001 24.65 4.35001 24.65C4.35001 24.65 4.35 24.64 4.34 24.63C4.28 24.49 4.22999 24.34 4.17999 24.19C4.13999 24.06 4.10999 23.93 4.07999 23.8C4.02999 23.54 4 23.27 4 23V9.5C4 8 5 7 6.5 7H9.5C11 7 12 8 12 9.5Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M24 21.5V24.5C24 26 23 27 21.5 27H8C8.41 27 8.83 26.94 9.22 26.81C9.33 26.77 9.43999 26.73 9.54999 26.68C9.89999 26.54 10.24 26.34 10.54 26.08C10.63 26.01 10.73 25.92 10.82 25.83L10.86 25.79L17.66 19H21.5C23 19 24 20 24 21.5Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.80994 26.82C6.20994 26.64 5.63995 26.31 5.16995 25.83C4.68995 25.36 4.35993 24.79 4.17993 24.19C4.56993 25.44 5.55994 26.43 6.80994 26.82Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.37 16.29L17.66 19L10.86 25.79C11.56 25.07 12 24.08 12 23V13.34L14.71 10.63C15.77 9.57002 17.19 9.57002 18.25 10.63L20.37 12.75C21.43 13.81 21.43 15.23 20.37 16.29Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M8 24C8.55228 24 9 23.5523 9 23C9 22.4477 8.55228 22 8 22C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text-[16px]">Theme</p>
          </div>
        </Box>
      </Box>
      {/* // overview end */}
    </Box>
  );
};

export default Drawer;

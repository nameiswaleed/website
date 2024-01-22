import Image from "next/image";
import { Recent, Sidebar, Header, Drawer } from "@/components";
import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
export default function Home() {
  return (
    <>
      <Box className="max-h-[100vh] overflow-y-scroll flex">
        <Box className="hidden lg:block">
          <Sidebar />
        </Box>
        <Box>
          <Header />

          <Recent />
        </Box>
      </Box>
    </>
  );
}

import { Box, CardActions, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { openModal } from "@/utils/store/slice/ModalSlice";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
const Video = ({ projectName, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Grid
        item
        xs={12 / 2}
        md={12 / 3}
        lg={12 / 4}
        xl={12 / 5}
        // spacing={2}
        className="flex  items-center justify-center p-4"
      >
        <Card
          sx={{
            padding: "3px",
            borderRadius: 5,
          }}
          className="flex flex-col min-w-[147px] lg:min-w-[180px] md:min-w-[235px] fill-black text-[#222222] hover:text-white item-center justify-between duration-300 transition-all bg-white hover:bg-[#725DFF]"
        >
          <CardMedia
            sx={{ height: 214, borderRadius: 5 }}
            image={`https://source.unsplash.com/500x500?`}
            title="green iguana"
          />

          <CardContent>
            <Box className="flex flex-row justify-between items-center">
              <Typography
                gutterBottom
                variant="h5"
                className="lg:text-[16px] text-[10px]"
                component="span"
              >
                {projectName}
              </Typography>
              <PiDotsThreeOutlineLight
                onClick={() => dispatch(openModal(id))}
              />
            </Box>
            <CardActions></CardActions>
            <Typography className="lg:text-[12px] text-[8px]" variant="body2">
              Created at:13 Aug, 2023
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Video;

"use client";
import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div className="text-center">
      <CircularProgress disableShrink />
    </div>
  );
};

export default Loader;

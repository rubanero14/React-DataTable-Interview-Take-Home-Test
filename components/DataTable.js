"use-client";

import { carJson } from "@/data/carJson";
import { columns } from "@/data/tableColumns";
import { Box, Typography, Divider } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const DataTable = () => {
  const [data, setData] = useState(carJson);
  const [params, setParams] = useState("");
  // Rendering Table based on query params
  if (typeof window !== "undefined") {
    // Your client-side code that uses window goes here
    setParams(new URLSearchParams(window.location.search));
  }

  console.log(params);
  const id = params.get("id") || "";
  const isInProduction = params.get("isInProduction") || "";
  const brand = params.get("brand") || "";
  const model = params.get("model") || "";
  const color = params.get("color") || "";

  // To get data using query param
  useEffect(() => {
    // Your client-side code that uses window goes here
    if (id) {
      setData(carJson.filter((item) => item.id === id));
    }

    if (isInProduction) {
      setData(carJson.filter((item) => item.isInProduction === isInProduction));
    }

    if (brand) {
      setData(carJson.filter((item) => item.brand === brand));
    }

    if (model) {
      setData(carJson.filter((item) => item.model === model));
    }

    if (color) {
      setData(carJson.filter((item) => item.color === color));
    }
  }, [id, isInProduction, brand, model, color]);

  // To set data using query param
  useEffect(() => {
    // Your client-side code that uses window goes here
    if (id) {
      params.set("id", id);
    }

    if (isInProduction) {
      params.set("isInProduction", isInProduction);
    }

    if (brand) {
      params.set("brand", brand);
    }

    if (model) {
      params.set("model", model);
    }

    if (color) {
      params.set("color", color);
    }
  }, [id, isInProduction, brand, model, color]);

  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          fontFamily="Roboto"
          fontWeight="bold"
          sx={{ textAlign: "center", my: 2 }}
        >
          Vehicle Order Details
        </Typography>

        <Link
          href="https://github.com/rubanero14/React-DataTable-Interview-Take-Home-Test"
          className="btn btn-secondary"
          target="_blank"
        >
          Source Code <GitHubIcon />
        </Link>

        <Divider style={{ textAlign: "center" }} />
        <DataGrid
          columns={columns}
          rows={data}
          getRowId={(row) => row.id}
          scrollbarSize={3}
          style={{ backgroundColor: "#eee" }}
        />
      </Box>
    </>
  );
};

export default DataTable;

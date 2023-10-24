import { carJson } from "@/data/carJson";
import { columns } from "@/data/tableColumns";
import { Box, Typography, Divider } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const DataTable = () => {
  const [data, setData] = useState(carJson);
  let params = "";

  // To get data using query param
  useEffect(() => {
    // Rendering Table based on query params
    // eslint-disable-next-line react-hooks/exhaustive-deps
    params = new URLSearchParams(document.location.search);
    console.log(params);
    const id = params.get("id");
    const isInProduction = params.get("isInProduction");
    const brand = params.get("brand");
    const model = params.get("model");
    const color = params.get("color");

    if (id) {
      setData(data.filter((item) => item.id === id));
    }

    if (isInProduction) {
      setData(data.filter((item) => item.isInProduction === isInProduction));
    }

    if (brand) {
      setData(data.filter((item) => item.brand === brand));
    }

    if (model) {
      setData(data.filter((item) => item.model === model));
    }

    if (color) {
      setData(data.filter((item) => item.color === color));
    }
  }, []);

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

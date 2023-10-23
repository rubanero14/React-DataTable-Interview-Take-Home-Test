import { carJson } from "@/data/carJson";
import { Box, Typography, Divider } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const DataTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(carJson);
  }, []);

  // Table columns header and row xconfig
  const columns = [
    { field: "id", headerName: "ID", width: 200, filterable: false },
    {
      field: "isInProduction",
      headerName: "Vehicle Is In Production",
      width: 300,
      type: "boolean",
      // editable: true,
      sortable: true,
    },
    {
      field: "brand",
      headerName: "Vehicle Brand",
      width: 150,
      sortable: true,
    },
    {
      field: "model",
      headerName: "Vehicle Model",
      width: 150,
      sortable: true,
    },
    {
      field: "color",
      headerName: "Vehicle Color",
      width: 150,
      sortable: true,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      filterable: false,
      sortable: true,
    },
  ];

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
        <Divider style={{ textAlign: "center" }} />
        <DataGrid
          columns={columns}
          rows={data}
          getRowId={(row) => row.id}
          scrollbarSize={3}
          style={{ backgroundColor: "#eee", width: "auto" }}
        />
      </Box>
    </>
  );
};

export default DataTable;

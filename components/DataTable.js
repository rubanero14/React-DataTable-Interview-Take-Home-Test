import { carJson } from "@/data/carJson";
import { Box, Typography, Divider } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useMemo, useEffect, useState } from "react";

const DataTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(carJson);
  }, []);

  const columns = useMemo(() => [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "isInProduction",
      headerName: "Is In Production",
      width: 200,
      type: "boolean",
      editable: true,
      sortable: true,
    },
    {
      field: "brand",
      headerName: "Car Brand",
      width: 150,
      editable: true,
      sortable: true,
    },
    {
      field: "model",
      headerName: "Car Model",
      width: 150,
      editable: true,
      sortable: true,
    },
    {
      field: "color",
      headerName: "Color",
      width: 150,
      editable: true,
      sortable: true,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      editable: true,
      sortable: true,
    },
  ]);

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
          Car Data
        </Typography>
        <Divider className="mb-5" />
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

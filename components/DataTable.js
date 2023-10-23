import { carJson } from "@/data/carJson";
import { columns } from "@/data/tableColumns";
import { Box, Typography, Divider } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(carJson);
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

import { carJson } from "@/data/car";
import autoprefixer from "autoprefixer";

export const DataTable = ({}) => {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "isInProduction",
      headerName: "IsIn Production",
      width: 100,
      editable: true,
      sortable: true,
    },
    {
      field: "brand",
      headerName: "Car Brand",
      width: 100,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  return <></>;
};

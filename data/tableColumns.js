// Table columns header and row config
export const columns = [
  { field: "id", headerName: "ID", width: 200, filterable: false },
  {
    field: "isInProduction",
    headerName: "Vehicle Is In Production",
    width: 300,
    type: "string",
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

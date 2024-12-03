import NextLink from "next/link";

import { Chip, Typography } from "@mui/material";

import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
} from "@mui/x-data-grid";

import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

import { ShopLayouts } from "@/src/components/layouts";

const rows: GridRowsProp = [
  { id: 1, fullname: "Juan Pérez", paid: true },
  { id: 2, fullname: "Ana López", paid: false },
  { id: 3, fullname: "Carlos Ruiz", paid: true },
];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "fullname", headerName: "Nombre completo", width: 250 },
  {
    field: "paid",
    headerName: "Estado",
    description: "Muestra información del estado de las ordenes",
    width: 200,
    renderCell: (params: GridRenderCellParams) => {
      return params.row.paid ? (
        <Chip
          icon={<CreditScoreIcon />}
          label="Pagada"
          variant="outlined"
          color="success"
        />
      ) : (
        <Chip
          icon={<CreditCardOffIcon />}
          label="Sin pagar"
          variant="outlined"
          color="error"
        />
      );
    },
  },

  {
    field: "orden",
    headerName: "Ver orden",
    sortable: false,
    filterable: false,
    width: 200,
    renderCell: (params: GridRenderCellParams) => {
      return <NextLink href={`/orders/${params.row.id}`}>Ver orden</NextLink>;
    },
  },
];

const HistoryPage = () => {
  return (
    <ShopLayouts
      title="Historial de ordenes"
      pageDescription="Historial de ordenes"
    >
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Historial de ordenes
      </Typography>
      <DataGrid rows={rows} columns={columns} />
    </ShopLayouts>
  );
};

export default HistoryPage;

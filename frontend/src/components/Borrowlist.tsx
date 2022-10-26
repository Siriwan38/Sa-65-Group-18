import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { BorrowListInterface } from "../models/IBorrowList";
import { GetBorrowList } from "../services/HttpClientService";
import moment from "moment";

function BorrowList() {
    const [borrowList, setBorrowList]= useState<BorrowListInterface[]>([]);

    useEffect(() => {
        getBorrowList();
    }, []);

    const getBorrowList = async () => {
        let res = await GetBorrowList();
        if (res) {
            setBorrowList(res);
        }
    };

    const columns: GridColDef[] = [
      { field: "ID", headerName: "No.", width: 50 },
      {
        field: "Equipment",
        headerName: "Equipment",
        width: 200,
        valueGetter: (params) => params.row.Equipment.Name,
      },
      {
        field: "User",
        headerName: "User",
        width: 150,
        valueGetter: (params) => params.row.Member.FirstName,
      },
      { field: "Amount", headerName: "Amount", width: 100 },
      { field: "Employee",
        headerName: "Author",
        width: 150,
        valueGetter: (params) => params.row.Employee.FirstName,
      },
      { field: "BorrowTime", headerName: "Borrow Time", width: 200,
        valueGetter: (params) => moment(params.row.BorrowTime).format("DD/MM/YYYY HH:mm") },
  ];

  return (
    <div>
      <Container maxWidth="md">
        <Box
          display="flex"
          sx={{
            marginTop: 2,
          }}
        >
          <Box flexGrow={1}>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              รายการยืมอุปกรณ์
            </Typography>
          </Box>
          <Box>
            <Button
              component={RouterLink}
              to="/borrow_list/create"
              variant="contained"
              color="primary"
            >
              Create List
            </Button>
          </Box>
        </Box>
        <div style={{ height: 400, width: "100%", marginTop: "20px" }}>
          <DataGrid
            rows={borrowList}
            getRowId={(row) => row.ID}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </Container>
    </div>
  );
}

export default BorrowList;